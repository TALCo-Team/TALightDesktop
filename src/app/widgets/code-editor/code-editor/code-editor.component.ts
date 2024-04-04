import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Commands } from 'src/app/services/api-service/api.commands';
import { ApiService } from 'src/app/services/api-service/api.service';
import { CompilerService } from 'src/app/services/compiler-service/compiler-service.service';
import { CompilerState } from 'src/app/services/compiler-service/compiler-service.types';

import { FsService, Tar } from 'src/app/services/fs-service/fs.service';
import { FsNodeFile, FsNodeFolder, FsNodeList } from 'src/app/services/fs-service/fs.service.types';
import { ProblemDescriptor, ServiceDescriptor } from 'src/app/services/problem-manager-service/problem-manager.types';

import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { ProjectConfig, ProjectEnvironment } from 'src/app/services/project-manager-service/project-manager.types';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';

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
import { CompilerDriver } from 'src/app/services/compiler-service/compiler-service-driver';


@Component({
  selector: 'tal-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  public cmdConnect?: Commands.Connect;

  public project: ProjectEnvironment | null = null;

  public selectedFile?: FsNodeFile;
  public selectedProblem?: ProblemDescriptor;
  public selectedService?: ServiceDescriptor;
  public pyodideState = CompilerState.Unknown
  public pyodideStateContent? = ""
  public apiRun = false
  public selectedHotkey = ""

  public fsroot = FsService.EmptyFolder;
  public fslist: FsNodeList = [];
  public fslistfile: FsNodeFile[] = [];

  public isPresent: string[] = [];
  public isPresentName: string[] = [];
  public files: FsNodeFile[] = [];

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
    private prj: ProjectManagerService,
    private cdRef: ChangeDetectorRef,
    private messageService: MessageService,
    private tutorialService: TutorialService,
    private elementRef: ElementRef,
    private hotkeys: HotkeysService
  ) {
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) })
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
    console.log("CodeEditorComponent:constructor", this.prj)

    this.prj.onProjectChanged.subscribe((project) => { this.setProject(project) })
    //TODO: add switch python/cpp

    this.project = prj.getCurrentProject();

    // subscribe to keyboard events
    document.addEventListener('keydown', (event: KeyboardEvent) => {this.hotkeys.emitHotkeysEvent(event)});
    this.hotkeys.registerHotkeysEvents().subscribe((event: KeyboardEvent) => {this.getCorrectHotkey(event)})
  }
  
  ngOnInit() {
    this.isBlurred = true;
    this.prj.addProject();
  }

  private getCorrectHotkey(event:KeyboardEvent) {
        
    // rewriting some stuff on config file
    this.addToConfig(this.project)
    console.log("New hotkeys added to config file")  

    if(event.ctrlKey === true && event.code === 'KeyS'){
      event.preventDefault();
      console.log("CTRL+S pressed");
      this.saveFile();
    }else if(event.ctrlKey === true && event.code === 'KeyE'){
      event.preventDefault();
      console.log("CTRL+E pressed");
      this.fileExplorer.export('Local');
    }else if(event.code === this.project?.config?.HOTKEY_RUN){
      event.preventDefault();
      console.log("F8 pressed");
      this.runProjectLocal();  
    }else if(event.code === this.project?.config?.HOTKEY_TEST){
      event.preventDefault(); 
      console.log("F9 pressed");
      this.runConnectAPI();
    }    
  }

  public async addToConfig(project: ProjectEnvironment | null) {
    
    var json_string = JSON.stringify(project?.config)
    var json_obj = JSON.parse(json_string);

    json_obj['HOTKEY_RUN'] = 'F8';
    json_obj['HOTKEY_TEST'] = 'F9';
    json_obj['HOTKEY_EXPORT'] = 'ctrl+e';

    json_string = JSON.stringify(json_obj, null, 4);
        
    if(project != null && project.config != null){
      if(project.config.CONFIG_PATH != undefined){
        project.driver.writeFile(project.config.CONFIG_PATH, json_string)
    }
  }

    console.log("Updated config file: ", project?.config);
  }

  private getCorrectHotkey(event:KeyboardEvent) {
        
    // rewriting some stuff on config file
    this.addToConfig(this.project)
    console.log("New hotkeys added to config file")  

    if(event.ctrlKey === true && event.code === 'KeyS'){
      event.preventDefault();
      console.log("CTRL+S pressed");
      this.saveFile();
    }else if(event.ctrlKey === true && event.code === 'KeyE'){
      event.preventDefault();
      console.log("CTRL+E pressed");
      this.fileExplorer.export('Local');
    }else if(event.code === this.project?.config?.HOTKEY_RUN){
      event.preventDefault();
      console.log("F8 pressed");
      this.runProjectLocal();  
    }else if(event.code === this.project?.config?.HOTKEY_TEST){
      event.preventDefault(); 
      console.log("F9 pressed");
      this.runConnectAPI();
    }    
  }

  public async addToConfig(project: ProjectEnvironment | null) {
    
    var string_config = JSON.stringify(project?.config)
    var config_obj = JSON.parse(string_config);

    config_obj['HOTKEY_RUN'] = 'F8';
    config_obj['HOTKEY_TEST'] = 'F9';
    config_obj['HOTKEY_EXPORT'] = 'ctrl+e';

    string_config = JSON.stringify(config_obj, null, 4);
        
    if(project != null && project.config != null){
      if(project.config.CONFIG_PATH != undefined){
        project.driver.writeFile(project.config.CONFIG_PATH, string_config)
    }
  }

    console.log("Updated config file: ", project?.config);
  }

  private isTutorialShown(tutorial?: any) {

    console.log("CodeEditorComponent:isTutorialShown")
    if (typeof tutorial === 'undefined')
    {
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
    else
    {
      this.isBlurred = true
    }
  }

  ngAfterViewInit() {
    this.outputWidget.enableStdin(false);
    const componentElement = this.elementRef.nativeElement;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  public didStateChangeReady(content?: string) {
    if (this.project) {
      console.log("didStateChange:Ready:loadProject")
      this.project.loadProject();
    }
  }

  public setProject(project:ProjectEnvironment) {
    console.log("CodeEditorComponent:constructor:onProjectChanged")
    
    this.project = project

    this.project?.driver.subscribeNotify(true, (msg: string) => { this.didNotify(msg) })
    this.project?.driver.subscribeState(true, (state: CompilerState, content?: string) => { this.didStateChange(state, content) })
    this.project?.driver.subscribeStdout(true, (msg: string) => { this.didStdout(msg) })
    this.project?.driver.subscribeStderr(true, (msg: string) => { this.didStderr(msg) })

    console.log("CodeEditorComponent:constructor:setProject", this.project)
  }


  public onUpdateRoot(fsroot: FsNodeFolder) {
    this.fsroot = fsroot;
    this.fslist = this.fs.treeToList(fsroot);
    this.fslistfile = this.fslist.filter(item => "content" in item) as FsNodeFile[]
    let filePathList = new Array<string>()
    this.fslistfile.forEach(item => filePathList.push(item.path))
    this.problemWidget.filePathList = filePathList
    this.terminalWidget.fslistfile = this.fslistfile;
  }

  public didNotify(data: string) {
    console.log("didNotify:")
    this.outputWidget!.print(data);
    //TODO: if API connect then:
    if (!this.cmdConnect) { return; }
    this.cmdConnect.sendBinary(data + "\n"); // The \n must be added to the python bot output
  }

  public didStateChange(state: CompilerState, content?: string) {
    console.log("CodeEditorComponent:didStateChange:")
    //this.outputWidget!.print(state,OutputType.SYSTEM);
    if (state == CompilerState.Init){
      this.project?.driver.mount(this.project.driver.mountPoint)
    }else if (state == CompilerState.Ready) {
      this.didStateChangeReady(content)
    }else if (state == CompilerState.Success || state == CompilerState.Error || state == CompilerState.Killed) {
      this.apiConnectReset();
    }
    
    this.pyodideState = state
    this.pyodideStateContent = content
    console.log("CodeEditorComponent:didStateChange:", state)
    if (!this.apiRun || state != CompilerState.Stdin) {
      this.outputWidget.didStateChange(state, content)
    }
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
      this.project?.driver.sendStdin(msgs[i])
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
    await this.project?.driver.createDirectory('/data')

    Tar.unpack(data, async (files, folders) => {
      console.log("extractTar:unpack:folders", folders)
      for (var idx in folders) {
        console.log("extractTar:createDirectory:")
        let folder = folders[idx]
        let path = '/data/' + folder.path
        console.log("extractTar:createDirectory:", path)
        await this.project?.driver.createDirectory(path)
      }
      console.log("extractTar:createDirectory:DONE")


      console.log("extractTar:unpack:files", files)
      for (var idx in files) {
        console.log("extractTar:writeFile:")
        let file = files[idx]
        let path = '/data/' + file.path
        let content = file.content
        console.log("extractTar:writeFile:", path, content)
        await this.project?.driver.writeFile(path, content)
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
    this.files.splice(Removeindex, 1);

    console.log("Tab is closed: ", this.isPresentName);

    if (Removeindex == this.activeIndex) {

      setTimeout(() => {
        this.activeIndex = 0;
        this.execBar.selectedFile = this.files[this.activeIndex];
        this.fileEditor.selectedFile = this.files[this.activeIndex];
        this.fileExplorer.selectedFile = this.files[this.activeIndex];
      }, 0);
    }

    if (Removeindex < this.activeIndex) {
      setTimeout(() => this.activeIndex = this.activeIndex - 1, 0);
    }

  }

  public changeFile(event: any) {
    setTimeout(() => {
      this.activeIndex = event.index;
      this.execBar.selectedFile = this.files[this.activeIndex];
      this.fileEditor.selectedFile = this.files[this.activeIndex];
      this.fileExplorer.selectedFile = this.files[this.activeIndex];
    }, 0);
  }


  public selectFile(file: FsNodeFile) {
    this.selectedFile = file;
    this.execBar.selectedFile = this.selectedFile
    this.fileEditor.selectedFile = this.selectedFile

    if (!this.isPresent.includes(this.selectedFile.path)) {
      this.isPresentName.push(this.selectedFile.name);
      this.files.push(this.selectedFile);
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
      this.project?.driver.writeFile(this.selectedFile.path, this.selectedFile.content)
    } else {
      console.log("saveFile:failed")
    }
  }

  async stopAll() {
    this.apiRun = false
    console.log("stopAll:")

    if (this.cmdConnect) { this.cmdConnect.tal.closeConnection() }
    console.log("stopAll:cmdConnect:DONE")
    await this.project?.driver.stopExecution()
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
    console.log("runProject:")
    this.outputWidget.clearOutput()

    let config = await this.compiler.readConfig()
    if (!config) { return false }
    console.log("runProject:config:ok")


    console.log("runProject:main:", config!.RUN)
    let mainFile = this.fslistfile.find(item => item.path == config!.RUN)
    if (!mainFile) { return false }
    console.log("runProject:main:ok")
    this.fileExplorer.selectFile(mainFile)

    this.outputWidget.print("RUN: " + config.RUN, OutputType.SYSTEM)
    this.saveFile();

    await this.compiler.runProject()
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



    let config = await this.compiler.readConfig()
    if (!config) { return false }
    console.log("apiConnect:config:ok")

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
    await this.compiler.runProject()
    this.outputWidget.print("API: " + config.RUN, OutputType.SYSTEM)
    console.log("apiConnect:runProject:running")

    //Open Connection
    console.log("CODE EDITOR:CONNECT:ARGS: ", this.selectedService.args)
    let problem = this.selectedService.parent.name;
    let service = this.selectedService.name;
    let args = this.selectedService.exportArgs();
    let tty = false //true: bash code coloring, backspaces, etc
    let token = (config.TAL_TOKEN && config.TAL_TOKEN != "" ? config.TAL_TOKEN : undefined)
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

    this.project?.driver.stopExecution()
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
      if (this.current_output_file) {
        this.project?.driver.writeFile("/" + this.current_output_file, data)
      };
      if (this.current_output_file === this.output_files[this.output_files.length - 1]) {
        this.apiConnectReset();
      }
      console.log("apiConnect:didConnectData:cmdConnect:", this.cmdConnect);
    }
    else {
      this.sendStdin(data, true);
    }
  }

  async didRecieveBinaryHeader(message: any) {
    console.log("apiConnect:didRecieveBinaryHeader:", message)

    this.current_output_file = message.name;
    if (this.current_output_file) { this.project?.driver.writeFile("/" + this.current_output_file, "") };
  }


}
