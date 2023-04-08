import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FsNodeFile, FsNodeFolder } from 'src/app/services/fs-service/fs.service.types';

@Component({
  selector: 'tal-execbar-widget',
  templateUrl: './execbar-widget.component.html',
  styleUrls: ['./execbar-widget.component.scss']
})
export class ExecbarWidgetComponent implements OnInit {
  @Input('selectedFile') selectedFile?:FsNodeFile

  @Output('onStop') public onStop = new EventEmitter<void>();
  @Output('onRun') public onRun = new EventEmitter<FsNodeFile>();
  @Output('onConnect') public onConnect = new EventEmitter<FsNodeFile>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public onStopClick(){
    this.onStop.emit()
  }

  public onRunClick(){
    this.onRun.emit(this.selectedFile)
  }

  public onConnectClick(){
    this.onConnect.emit(this.selectedFile)
  }

}
