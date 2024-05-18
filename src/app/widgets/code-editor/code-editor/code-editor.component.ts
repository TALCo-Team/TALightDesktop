import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Commands } from 'src/app/services/api-service/api.commands';
import { ApiService } from 'src/app/services/api-service/api.service';
import { CompilerService } from 'src/app/services/compiler-service/compiler-service.service';
import { CompilerState } from 'src/app/services/compiler-service/compiler-service.types';
import { FsService, Tar } from 'src/app/services/fs-service/fs.service';
import { FsNodeFile, FsNodeFolder, FsNodeList } from 'src/app/services/fs-service/fs.service.types';
import { ProblemDescriptor, ServiceDescriptor } from 'src/app/services/problem-manager-service/problem-manager.types';
import { FileExplorerWidgetComponent } from 'src/app/widgets/code-editor/file-explorer-widget/file-explorer-widget.component';
import { ExecbarWidgetComponent } from '../execbar-widget/execbar-widget.component';
import { FileEditorWidgetComponent } from '../file-editor-widget/file-editor-widget.component';
import { OutputType, OutputWidgetComponent } from '../output-widget/output-widget.component';
import { ProblemWidgetComponent } from '../problem-widget/problem-widget.component';
import { ChangeDetectorRef } from '@angular/core';
import { LogApiWidgetComponent } from '../log-api-widget/log-api-widget.component';
import { MessageService } from 'primeng/api';
import { TerminalWidgetComponent } from '../terminal-widget/terminal-widget.component';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { HotkeysService } from 'src/app/services/hotkeys-service/hotkeys.service';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { ProjectDriver, ProjectLanguage } from 'src/app/services/project-manager-service/project-manager.types';


@Component({
  selector: 'tal-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  public cmdConnect?: Commands.Connect;

  public selectedFile?: FsNodeFile;
  public selectedProblem?: ProblemDescriptor;
  public selectedService?: ServiceDescriptor;
  public pyodideState = CompilerState.Unknown
  public pyodideStateContent? = ""
  public apiRun = false

  public fsroot = FsService.EmptyFolder;
  public fslist: FsNodeList = [];
  public fslistfile: FsNodeFile[] = [];

  public isPresent: string[] = [];
  public isPresentName: string[] = [];

  public activeIndex = 0;
  public activeWidget = 0;

  @ViewChild("fileExplorer") public fileExplorer!: FileExplorerWidgetComponent;
  @ViewChild("fileEditor") public fileEditor!: FileEditorWidgetComponent;
  @ViewChild("execBar") public execBar!: ExecbarWidgetComponent;
  @ViewChild("problemWidget") public problemWidget!: ProblemWidgetComponent;
  @ViewChild("outputWidget") public outputWidget!: OutputWidgetComponent;
  @ViewChild("logApiWidget") public logApiWidget!: LogApiWidgetComponent;
  @ViewChild("terminalWidget") public terminalWidget!: TerminalWidgetComponent;

  private output_files: string[] | undefined = undefined;
  private current_output_file: string | undefined = undefined;

  protected LogApiDisabled = true;
  protected OutputDisabled = true;
  protected TerminalDisabled = true;

  protected isBlurred = false;

  constructor(
    private fs: FsService,
    private compiler: CompilerService,
    private api: ApiService,
    private pms: ProjectManagerService,
    private cdRef: ChangeDetectorRef,
    private messageService: MessageService,
    private tutorialService: TutorialService,
    private elementRef: ElementRef,
    private hotkeysService: HotkeysService
  ) {
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) })
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
    console.log("CodeEditorComponent:constructor", this.pms)

    // TODO: Multi Compiler
    this.subscribeWorker(this.compiler.get(ProjectLanguage.PY));

    document.addEventListener('keydown', (event: KeyboardEvent) => { this.hotkeysService.emitHotkeysEvent(event) });
    this.hotkeysService.registerHotkeysEvents().subscribe((event: KeyboardEvent) => { this.hotkeysService.getCorrectHotkey(event) })
    this.hotkeysService.hotkeysAction.subscribe((emitter) => { this.chooseHotkeysAction(emitter) })

    this.pms.currentProjectChanged.subscribe(() => {
      console.log("CodeEditorComponent:currentProjectChanged:")
      this.outputWidget.clearOutput()
    })
  }

  ngOnInit() {
    this.isBlurred = true;
  }

  private chooseHotkeysAction(emitter: string) {
    if (emitter === 'save') {
      this.saveFile();
    } else if (emitter === 'run') {
      this.runProjectLocal();
    } else if (emitter === 'test') {
      this.runConnectAPI();
    } else if (emitter === 'export') {
      this.fileExplorer.export('Local');
    }
  }

  private isTutorialShown(tutorial?: any) {

    console.log("CodeEditorComponent:isTutorialShown")
    if (typeof tutorial === 'undefined') {
      this.LogApiDisabled = false;
      this.OutputDisabled = false;
      this.TerminalDisabled = false;
      this.isBlurred = false
    }
    else if (tutorial.componentName === "CodeEditorComponent"
      || tutorial.componentName === "OutputWidgetComponent"
      || tutorial.componentName === "LogApiWidgetComponent"
      || tutorial.componentName === "TerminalWidgetComponent") {
      this.isBlurred = false
      if (tutorial.componentName === "OutputWidgetComponent") {
        this.activeWidget = 0;
        this.LogApiDisabled = true;
        this.OutputDisabled = false;
        this.TerminalDisabled = true;
      }
      else if (tutorial.componentName === "LogApiWidgetComponent") {
        this.activeWidget = 1;
        this.LogApiDisabled = false;
        this.OutputDisabled = true;
        this.TerminalDisabled = true;
      }
      else if (tutorial.componentName === "TerminalWidgetComponent") {
        this.activeWidget = 2;
        this.LogApiDisabled = true;
        this.OutputDisabled = true;
        this.TerminalDisabled = false;
      }
    }
    else {
      this.isBlurred = true
    }
  }

  private setEditorHeight(): void {
    const editorContainer = this.elementRef.nativeElement.querySelector('.tal-code-editor');
    const windowHeight = window.innerHeight;
    const newHeight = windowHeight - 85; // Sottrai 85px dall'altezza della finestra
    editorContainer.style.height = newHeight + 'px';
  }

  ngAfterViewInit() {
    this.outputWidget.enableStdin(false);
    const componentElement = this.elementRef.nativeElement;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  private subscribeWorker(driver: ProjectDriver) {
    console.log("CodeEditorComponent:subscribeWorker:driver:", driver)

    if (driver.eventsSubscribed) {
      console.log("CodeEditorComponent:subscribeWorker:driver:error")
      return;
    }
    driver.eventsSubscribed = true;

    driver.subscribeNotify(true, (msg: string) => { this.didNotify(msg) })
    driver.subscribeState(true, (state: CompilerState, content?: string) => { this.didStateChange(state, content) })
    driver.subscribeStdout(true, (msg: string) => { this.didStdout(msg) })
    driver.subscribeStderr(true, (msg: string) => { this.didStderr(msg) })

    console.log("CodeEditorComponent:subscribeWorker:driver:done")
  }


  public onUpdateRoot(fsroot: FsNodeFolder) {
    let id = this.pms.getCurrentProjectId();
    let project = this.pms.getCurrentProject();
    console.log("CodeEditorComponent:onUpdateRoot:id:", id)

    this.fsroot = fsroot;
    this.fslist = this.fs.treeToList(fsroot);
    this.fslistfile = this.fslist.filter(item => "content" in item) as FsNodeFile[]
    let filePathList = new Array<string>()
    this.fslistfile.forEach(item => filePathList.push(item.path))
    this.problemWidget.filePathList = filePathList
    this.terminalWidget.fslistfile = this.fslistfile;

    let mainFile = this.fslistfile.find(item => item.path == project.config.RUN)
    console.log("CodeEditorComponent:onUpdateRoot:id:", id, ":main:", mainFile, project.config.RUN)
    if (!mainFile) {
      console.log("CodeEditorComponent:onUpdateRoot:id:", id, ":main:failed", mainFile)
      return
    }
    console.log("CodeEditorComponent:onUpdateRoot:id:", id, ":main:ok")

    this.selectFile(mainFile)
  }

  public didNotify(data: string) {
    console.log("didNotify:")
    this.outputWidget!.print(data);
    //TODO: if API connect then:
    if (!this.cmdConnect) { return; }
    this.cmdConnect.sendBinary(data + "\n"); // The \n must be added to the python bot output
  }

  private didStateChange(state: CompilerState, content?: string) {
    //this.outputWidget!.print(state,OutputType.SYSTEM);

    if (state == CompilerState.Init) {
      //TODO Multi Compiler
      console.log("CodeEditorComponent:didStateChange:CompilerState.Init:")
      let driver = this.compiler.get(ProjectLanguage.PY)
      if (!driver.isWorkerReady) {
        driver.isWorkerReady = true
        this.compiler.get(ProjectLanguage.PY).onWorkerReady.emit()
      }
      console.log("CodeEditorComponent:didStateChange:CompilerState.Init:done")
    } else if (state == CompilerState.Ready) {
      console.log("CodeEditorComponent:didStateChange:CompilerState.Ready:")
      //TODO Daniel: maybe mount/event event could be emitted here instead of MountReceive and UnmountReceive
    } else if (state == CompilerState.Success || state == CompilerState.Error || state == CompilerState.Killed) {
      this.apiConnectReset();
    }

    this.pyodideState = state
    this.pyodideStateContent = content
    console.log("CodeEditorComponent:didStateChange:", state)
    if (!this.apiRun || state != CompilerState.Stdin)
      this.outputWidget.didStateChange(state, content)
  }

  public didStdout(data: string) {
    console.log("onStdout:")
    this.outputWidget!.print(data);
    //TODO: if API connect then:
    if (!this.cmdConnect) { return; }
    this.cmdConnect.sendBinary(data + "\n"); // The \n must be added to the python bot output
  }

  public didStderr(data: string) {
    console.log("onStderr:")
    //alert("STDERR: "+data)
    //this.nm.sendNotification("ERROR:",data,NotificationType.Error)
    this.outputWidget.print(data, OutputType.STDERR)
  }

  public sendStdin(msg: string, fromAPI = false) {
    console.log("sendStdin:")
    let msgs = msg.split("\n");
    if (msgs[msgs.length - 1] === "") { msgs.pop(); }
    console.log("sendStdin:split: ", msgs)

    for (let i = 0; i < msgs.length; i++) {
      this.outputWidget.print(msgs[i], fromAPI ? OutputType.STDINAPI : OutputType.STDIN)
      this.pms.getCurrentDriver().sendStdin(msgs[i])
    }
    if (!fromAPI || this.pyodideState != CompilerState.Stdin) {
      this.outputWidget.enableStdin(false)
    }
  }

  public onProblemChanged(selectedProblem: ProblemDescriptor) {
    console.log("onProblemChanged:", selectedProblem)
    this.selectedProblem = selectedProblem;
    this.selectedService = undefined;
  }

  public onServiceChanged(selectedService: ServiceDescriptor) {
    console.log("onServiceChanged:", selectedService)
    this.selectedService = selectedService;
  }

  public onProblemListChanged() {
    this.selectedProblem = undefined
    this.selectedService = undefined

    if (this.logApiWidget.isActive) {
      this.logApiWidget.addLine("rtal -s " + this.api.url + " list");
      this.activeWidget = 1;
    }
  }

  async onAttachments(data: ArrayBuffer, widget: string) {
    console.log("onAttachments:EVENT: ", event?.target)
    console.log("onAttachments:", data)
    if (!this.selectedProblem) { return; }
    console.log("onAttachments:selectedProblem:", this.selectedProblem)
    if (!(data instanceof ArrayBuffer)) { return; }
    console.log("onAttachments:data:", data)

    console.log("extractTar:unpack:")
    await this.pms.getCurrentDriver().createDirectory('/data')

    Tar.unpack(data, async (files, folders) => {
      console.log("extractTar:unpack:folders", folders)
      for (var idx in folders) {
        console.log("extractTar:createDirectory:")
        let folder = folders[idx]
        let path = '/data/' + folder.path
        console.log("extractTar:createDirectory:", path)
        await this.pms.getCurrentDriver().createDirectory(path)
      }
      console.log("extractTar:createDirectory:DONE")


      console.log("extractTar:unpack:files", files)
      for (var idx in files) {
        console.log("extractTar:writeFile:")
        let file = files[idx]
        let path = '/data/' + file.path
        let content = file.content
        console.log("extractTar:writeFile:", path, content)
        await this.pms.getCurrentDriver().writeFile(path, content)
      }
      console.log("extractTar:writeFile:DONE")

      if (this.logApiWidget.isActive && widget === "problemWidget") {
        this.logApiWidget.addLine("rtal -s " + this.api.url + " get " + this.selectedProblem?.name);
        this.activeWidget = 1;
      }

      this.fileExplorer.refreshRoot()
    });

  }

  public onItemRenamed(event: any) {
    var renamedFileIndex = this.isPresent.indexOf(event.oldpath);

    if (renamedFileIndex != -1) {
      this.removeItem({ "index": renamedFileIndex })
    }
  }


  public onFileDeleted(filePath: string) {
    var removedFileIndex = this.isPresent.indexOf(filePath);

    // Removed file is open on the code editor, so now close all associated tabs
    if (removedFileIndex != -1) {
      this.removeItem({ "index": removedFileIndex })
    }
  }

  // When a tab is closed, the file is removed from array of paths and names
  public removeItem(event: any) {
    var Removeindex = event.index;
    this.isPresentName.splice(Removeindex, 1);
    this.isPresent.splice(Removeindex, 1);

    let files = this.pms.getCurrentProject().files;
    files.splice(Removeindex, 1);

    console.log("Tab is closed: ", this.isPresentName);

    if (Removeindex == this.activeIndex) {
      setTimeout(() => {
        this.activeIndex = 0;
        if (!files) { return; }

        this.execBar.selectedFile = files[this.activeIndex];
        this.fileEditor.selectedFile = files[this.activeIndex];
        this.fileExplorer.selectedFile = files[this.activeIndex];
      }, 0);
    }

    if (Removeindex < this.activeIndex) {
      setTimeout(() => this.activeIndex = this.activeIndex - 1, 0);
    }
  }

  public changeFile(event: any) {
    setTimeout(() => {
      this.activeIndex = event.index;

      let files = this.pms.getCurrentProject().files;

      console.log("changeFile:id:", this.pms.getCurrentProjectId(), files, this.activeIndex)

      this.execBar.selectedFile = files[this.activeIndex];
      this.fileEditor.selectedFile = files[this.activeIndex];
      this.fileExplorer.selectedFile = files[this.activeIndex];
    }, 0);
  }


  public selectFile(file: FsNodeFile) {
    this.selectedFile = file;
    this.execBar.selectedFile = this.selectedFile
    this.fileEditor.selectedFile = this.selectedFile

    if (!this.isPresent.includes(this.selectedFile.path)) {
      this.isPresentName.push(this.selectedFile.name);

      this.pms.getCurrentProject().files.push(this.selectedFile);

      setTimeout(() => this.activeIndex = (this.isPresentName.length) - 1, 0);

      this.isPresent.push(this.selectedFile.path);
    } else {
      this.setActiveIndex(this.selectedFile.path);
    }
  }

  public setActiveIndex(path: string) {
    setTimeout(() => this.activeIndex = this.isPresent.indexOf(path), 0);
  }

  public editorDidChange(file: FsNodeFile) {
    console.log("editorDidChange:")
    this.saveFile()
  }

  public editorDidInput(event: InputEvent) {
    console.log("Input: ", this.fileEditor)
    this.saveFile()
  }

  public saveFile() {
    if (this.selectedFile) {
      console.log("saveFile:", this.selectedFile.path, this.fileEditor)
      this.pms.getCurrentDriver().writeFile(this.selectedFile.path, this.selectedFile.content)
    } else {
      console.log("saveFile:failed")
    }
  }

  async stopAll() {
    this.apiRun = false
    console.log("stopAll:")

    if (this.cmdConnect) { this.cmdConnect.tal.closeConnection() }
    console.log("stopAll:cmdConnect:DONE")
    await this.pms.getCurrentDriver().stopExecution()
    console.log("stopAll:cmdConnect:DONE")
  }

  public changeWidget(event: any) {
    this.logApiWidget.flashLine();
  }

  //-------------- API CONNECT
  public async runProjectLocal() {
    this.apiRun = false
    await this.runProject();
    this.apiRun = false
  }

  public async runProject() {
    let id = this.pms.getCurrentProjectId();
    let project = this.pms.getCurrentProject();
    console.log("CodeEditoreComponent:runProject:id", id, project)
    this.outputWidget.clearOutput()

    console.log("CodeEditoreComponent:runProject:id:", id, ":main:", project.config.RUN)
    let mainFile = this.fslistfile.find(item => item.path == project.config.RUN)
    if (!mainFile) { return false }
    console.log("CodeEditoreComponent:runProject:id:", id, ":main:ok")
    this.fileExplorer.selectFile(mainFile)

    this.outputWidget.print("RUN: " + project.config.RUN, OutputType.SYSTEM)
    this.saveFile();

    await this.pms.runProject();
    return true
  }

  public async runConnectAPI() {
    this.apiRun = true
    this.outputWidget.clearOutput()
    this.saveFile();

    await this.apiConnect()

    this.apiRun = false
    this.fileExplorer.refreshRoot()
  }

  async apiConnectReset() {
    this.current_output_file = undefined;
    this.cmdConnect = undefined;
    this.outputWidget.enableStdin(false)
    console.log("apiConnect:didConnectData:cmdConnect:", this.cmdConnect);
  }

  async apiConnect() {
    console.log("apiConnect")

    if (!this.selectedProblem) {

      this.messageService.add({
        key: 'br',
        severity: 'error',
        summary: 'Error',
        detail: 'No problem selected',
      });

      this.outputWidget.print("No problem selected", OutputType.STDERR)
      return false
    }

    if (!this.selectedService) {

      this.messageService.add({
        key: 'br',
        severity: 'error',
        summary: 'Error',
        detail: 'No service selected',
      });

      this.outputWidget.print("No service selected", OutputType.STDERR)
      return false
    }
    console.log("apiConnect:service:ok")

    let ArgsInvalid = await this.problemWidget.validateArgs();
    //console.log("CODE EDITOR:CONNECT:VALIDATE ARGS: ", result)

    if (ArgsInvalid && ArgsInvalid.size > 0) {
      this.messageService.add({
        key: 'br',
        severity: 'error',
        summary: 'Error',
        detail: 'Args setted are invalid. Please correct',
      });

      return false;
    }

    //Run MAIN
    console.log("apiConnect:runProject")
    this.saveFile();
    let project = this.pms.getCurrentProject();
    let projectConfig = project.config;
    let id = this.pms.getCurrentProjectId();

    await this.pms.runProject()

    this.outputWidget.print("API: " + projectConfig.RUN, OutputType.SYSTEM)
    console.log("apiConnect:runProject:running")

    //Open Connection
    console.log("CODE EDITOR:CONNECT:ARGS: ", this.selectedService.args)
    let problem = this.selectedService.parent.name;
    let service = this.selectedService.name;
    let args = this.selectedService.exportArgs();
    let tty = false //true: bash code coloring, backspaces, etc
    let token = (projectConfig.TAL_TOKEN && projectConfig.TAL_TOKEN != "" ? projectConfig.TAL_TOKEN : undefined)
    let filePaths = this.selectedService.exportFilesPaths();
    let files = new Map<string, string>();

    filePaths.forEach((fileArgPath, fileArgName) => {
      console.log("apiConnect:params:problem:path:", fileArgName, fileArgPath)
      let found = this.fslistfile.find(item => item.path == fileArgPath)
      console.log("apiConnect:params:problem:found:", found)
      if (!found) { return }
      let content = found.content
      if (content instanceof ArrayBuffer) {
        content = this.binDecoder.decode(content)
      }
      files.set(fileArgName, content)
    })


    console.log("apiConnect:params:problem", problem)
    console.log("apiConnect:params:service", service)
    console.log("apiConnect:params:args", args)
    console.log("apiConnect:params:tty", tty)
    console.log("apiConnect:params:token", token)
    console.log("apiConnect:params:files", files)


    let onConnectionStart = () => { this.didConnectStart() };
    let onConnectionBegin = (msg: string[]) => { this.didConnectBegin(msg) };
    let onConnectionClose = (msg: string[]) => { this.didConnectClose(msg) };
    let onData = (data: string) => { this.didConnectData(data) };
    let onBinaryHeader = (msg: any) => { this.didRecieveBinaryHeader(msg) };

    let newLogLine = "rtal -s " + this.api.url + " connect " + problem + " " + service
    let keys = Object.keys(args);
    let values = Object.values(args);

    for (let i = 0; i < keys.length; i++) { newLogLine += " -a " + keys[i] + "=" + values[i]; }

    if (this.logApiWidget.isActive) {
      this.logApiWidget.addLine(newLogLine);
    }

    this.activeWidget = 0;

    this.cmdConnect = await this.api.Connect(
      problem,
      service,
      args,
      tty,
      token,
      files,
      onConnectionBegin,
      onConnectionStart,
      onConnectionClose,
      onData,
      onBinaryHeader
    );
    console.log("apiConnect:DONE")

    return true
  }

  async didConnectError(error: string) {
    console.log("apiConnect:didConnectError:", error)
    this.outputWidget.print("API Error: " + error, OutputType.STDERR)
    this.cmdConnect = undefined
    this.outputWidget.enableStdin(false)

    this.pms.stopExecution()
  }

  async didConnectStart() {
    console.log("apiConnect:didConnectStart")
  }

  async didConnectBegin(message: string[]) {
    console.log("apiConnect:didConnectBegin:", message)
  }

  async didConnectClose(message: string[]) {
    console.log("apiConnect:didConnectionClose:", message)

    if (message && message.length > 0 && message[0] !== "") {
      this.output_files = message;
    }
    else {
      this.apiConnectReset();
      console.log("apiConnect:didConnectClose:cmdConnect:", this.cmdConnect);
    }
  }

  async didConnectData(data: string) {
    console.log("apiConnect:didConnectData:", data)
    if (this.output_files && this.current_output_file) {
      if (this.current_output_file)
        this.pms.getCurrentDriver().writeFile("/" + this.current_output_file, data)

      if (this.current_output_file === this.output_files[this.output_files.length - 1])
        this.apiConnectReset();

      console.log("apiConnect:didConnectData:cmdConnect:", this.cmdConnect);
    }
    else {
      this.sendStdin(data, true);
    }
  }

  async didRecieveBinaryHeader(message: any) {
    console.log("apiConnect:didRecieveBinaryHeader:", message)
    this.current_output_file = message.name;
    if (this.current_output_file)
      this.pms.getCurrentDriver().writeFile("/" + this.current_output_file, "")
  }
}
