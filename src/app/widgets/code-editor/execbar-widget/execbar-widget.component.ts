import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FsNodeFile, FsNodeFolder } from 'src/app/services/fs-service/fs.service.types';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';

@Component({
  selector: 'tal-execbar-widget',
  templateUrl: './execbar-widget.component.html',
  styleUrls: ['./execbar-widget.component.scss']
})
export class ExecbarWidgetComponent implements OnInit {
  @Input('selectedFile') selectedFile?: FsNodeFile

  @Output('onStop') public onStop = new EventEmitter<void>();
  @Output('onRun') public onRun = new EventEmitter<FsNodeFile>();
  @Output('onConnect') public onConnect = new EventEmitter<FsNodeFile>();

  constructor(
    private tutorialService: TutorialService,
  ) {
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) })
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
  }


  ngOnInit() {
    // this.isBlurred = true;
  }

  protected isBlurred = true;

  private isTutorialShown(tutorial?: any) {
    console.log("ExecbarWidgetComponent:isTutorialShown")
    if (typeof tutorial === 'undefined' || tutorial.componentName === "ExecbarWidgetComponent") {
      this.isBlurred = false
      console.log(this.isBlurred)
      console.log("ExecbarWidgetComponent:isTutorialShown IS CALLED!!!!!!!!!!!!!!!!!!!")
    }
    else {
      this.isBlurred = true
    }
  }

  public onStopClick() {
    this.onStop.emit()
  }

  public onRunClick() {
    this.onRun.emit(this.selectedFile)
  }

  public onConnectClick() {
    this.onConnect.emit(this.selectedFile)
  }

}
