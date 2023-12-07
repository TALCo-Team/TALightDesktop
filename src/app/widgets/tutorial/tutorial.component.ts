import { Component, OnInit } from '@angular/core';

//Il blur é stato fatto su file-editor-widget e su file-explorer-widget

@Component({
  selector: 'tal-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forwardTutorial(){
    console.log('forwardTutorial')
  }

}
