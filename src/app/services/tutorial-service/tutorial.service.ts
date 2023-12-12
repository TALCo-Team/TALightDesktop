import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  public onTutorialClose = new EventEmitter<void>();
  public onTutorialChange = new EventEmitter<any>();

  constructor() { }

  //TODO: potremmo mettere dei numeri per gestire l'avanti e l'indietro, ordinando quindi i vari step
  private tutorials = [
    {
      componentName: "Begin",
      text: `Benvenuto in TALight Desktop! Iniziamo con un tutorial con la spiegazione dei vari componenti.
            Nel caso volessi uscire subito, basta che schiacci il tasto 'Chiudi' in alto a destra su questa finestra.`,
      stepNumber: 1,
    },

    {
      componentName: "TopbarWidgetComponent",
      text: `Nella topbar potrai trovare la disponibilitá del server,
              l'URL del server a cui ti sei connesso e potrai passare anche alla dark mode!`,
      stepNumber: 2
    },
    {
      componentName: "CodeEditorComponent",
      text: "In questa sezione avrai 3 strumenti importanti: output, Log API ed un terminale",
      stepNumber: 3
    },
    {
      componentName: "ExecbarWidgetComponent",
      text: `Qui invece sono presenti i bottoni per avviare l'esecuzione,
              fermarla oppure per verificare la soluzione con il server`
      , stepNumber: 4
    },
    {
      componentName: "FileEditorWidgetComponent", text: "Come dice il nome, questo é un semplice file editor..",
      stepNumber: 5
    },
    {
      componentName: "FileExplorerWidgetComponent",
      text: "..e questo, invece un file explorer",
      stepNumber: 6
    },
    {
      componentName: "LogApiWidgetComponent",
      text: "LogApiWidgetComponent",
      stepNumber: 7
    },
    {
      componentName: "MonacoEditorWidgetComponent",
      text: "MonacoEditorWidgetComponent",
      stepNumber: 8
    },
    {
      componentName: "OutputWidgetComponent",
      text: "OutputWidgetComponent",
      stepNumber: 9
    },
    {
      componentName: "ProblemWidgetComponent",
      text: "Seleziona il problema",
      stepNumber: 10
    },
    {
      componentName: "TerminalWidgetComponent",
      text: "TerminalWidgetComponent",
      stepNumber: 11
    },
    {
      componentName: "End",
      text: "Grazie per aver completato il tour! Buon coding!",
      stepNumber: 12
    },
  ]
  // private tutorials = [
  //   { componentName: "Begin", text: "Benvenuto in TALight Desktop! " },
  //   { componentName: "TopbarWidgetComponent", text: "TopbarWidgetComponent " },
  //   { componentName: "CodeEditorComponent", text: "CodeEditorComponent" },
  //   { componentName: "ExecbarWidgetComponent", text: "ExecbarWidgetComponent" },
  //   { componentName: "FileEditorWidgetComponent", text: "FileEditorWidgetComponent" },
  //   { componentName: "FileExplorerWidgetComponent", text: "FileExplorerWidgetComponent" },
  //   { componentName: "LogApiWidgetComponent", text: "LogApiWidgetComponent" },
  //   { componentName: "MonacoEditorWidgetComponent", text: "MonacoEditorWidgetComponent" },
  //   { componentName: "OutputWidgetComponent", text: "OutputWidgetComponent" },
  //   { componentName: "ProblemWidgetComponent", text: "ProblemWidgetComponent" },
  //   { componentName: "TerminalWidgetComponent", text: "TerminalWidgetComponent" },
  //   { componentName: "End", text: "Grazie per aver completato il tour! Buon coding!" },
  // ]

  public nextTutorial(indexCurrentTutorial: number) {
    console.log("TutorialService:nextTutorial")
    if (this.tutorials.length > indexCurrentTutorial) {
      this.onTutorialChange.emit(this.tutorials[indexCurrentTutorial]);
    }
    else {
      this.closeTutorial()
    }
  }

  public prevTutorial(indexCurrentTutorial: number) {
    if (indexCurrentTutorial > 0) {
      this.onTutorialChange.emit(this.tutorials[indexCurrentTutorial]);
    }
    else if (indexCurrentTutorial === 0) {
      this.onTutorialChange.emit(this.tutorials[0]);
    }
    else {
      console.log("Non posso tornare indietro")
    }
  }

  // TODO cache dont show tutorial again
  public closeTutorial() {
    console.log("TutorialService:closeTutorial")
    this.onTutorialClose.emit();
  }
}
