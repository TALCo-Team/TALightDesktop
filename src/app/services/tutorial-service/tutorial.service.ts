import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  public onTutorialClose = new EventEmitter<void>();
  public onTutorialChange = new EventEmitter<any>();

  constructor() { }

  //TODO: scrivi effettivamente il tutorial
  private tutorials = [
    { componentName: "Begin", text: "inizio tutorial" },
    { componentName: "TopbarWidgetComponent", text: "tutorial0" },
    { componentName: "CodeEditorComponent", text: "tutorial1" },
    { componentName: "ExecbarWidgetComponent", text: "tutorial2" },
    { componentName: "FileEditorWidgetComponent", text: "tutorial3" },
    { componentName: "FileExplorerWidgetComponent", text: "tutorial4" },
    { componentName: "LogApiWidgetComponent", text: "tutorial5" },
    { componentName: "MonacoEditorWidgetComponent", text: "tutorial6" },
    { componentName: "OutputWidgetComponent", text: "tutorial7" },
    { componentName: "ProblemWidgetComponent", text: "tutorial8" },
    { componentName: "TerminalWidgetComponent", text: "tutorial9" },
    { componentName: "End", text: "fine tutorial" },
  ]

  public nextTutorial(indexCurrentTutorial: number) {
    console.log("TutorialService:nextTutorial")
    if (this.tutorials.length > indexCurrentTutorial) {
      this.onTutorialChange.emit(this.tutorials[indexCurrentTutorial]);
    }
    else {
      this.closeTutorial()
    }
  }

  // TODO cache dont show tutorial again
  public closeTutorial() {
    console.log("TutorialService:closeTutorial")
    this.onTutorialClose.emit();
  }
}
