import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  public onTutorialClose = new EventEmitter<void>();
  public onTutorialChange = new EventEmitter<any>();

  constructor() { }

  private tutorials = [
    {componentName: "Begin", text : "inizio tutorial" },
    {componentName: "FileExplorerWidgetComponent", text : "tutorial1" },
    {componentName: "FileEditorWidgetComponent", text : "tutorial2" },
    {componentName: "CodeEditorComponent", text : "tutorial3" },
    {componentName: "End", text : "fine tutorial" },
  ]

  //restituisce il nuovo tutorial se 
  public nextTutorial(indexCurrentTutorial: number){
    console.log("TutorialService - nextTutorial")
    if (this.tutorials.length > indexCurrentTutorial){
      this.onTutorialChange.emit(this.tutorials[indexCurrentTutorial]);
    }
    else{
      this.closeTutorial()
    }
    

  }

  // TODO cache dont show tutorial again
  public closeTutorial(){
    console.log("TutorialService - closeTutorial")
    this.onTutorialClose.emit();
  }
}
