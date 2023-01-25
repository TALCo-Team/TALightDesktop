import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeEditorComponent } from 'src/app/widgets/code-editor/code-editor/code-editor.component';


@Component({
  selector: 'tal-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  
  @ViewChild("codeEditor") public codeEditor!: CodeEditorComponent;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
