import { Component, OnInit } from '@angular/core';
import { FsService, FsServiceTest } from 'src/app/services/fs-service/fs.service';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { TalFile } from 'src/app/widgets/code-editor/editor-files-widget/editor-files-widget.component';

@Component({
  selector: 'tal-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public openedFile?: TalFile;

  public fs;

  constructor(
    private pythonSrv: PythonCompilerService,
    private _fs: FsService
  ) {
    this.fs = _fs;
  }

  ngOnInit(): void {

  }

  public openFile(file: TalFile) {
    this.openedFile = file;
  }

}
