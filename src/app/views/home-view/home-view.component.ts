import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorWidgetComponent } from 'src/app/widgets/code-editor/editor-widget/editor-widget.component';


@Component({
  selector: 'tal-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  
  @ViewChild("editorWidget") public editorWidget!: EditorWidgetComponent;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
