import { Component, OnInit } from '@angular/core';

//Il blur é stato fatto su file-editor-widget e su file-explorer-widget

@Component({
  selector: 'tal-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // TODO
  forwardTutorial(){
    console.log('forwardTutorial')
  }

  // TODO
  closeTutorial(){
    
    console.log('closeTutorial')
  }


}

