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
    { componentName: "Begin", text: "Benvenuto in TALight Desktop! Iniziamo con un tutorial con la spiegazione dei vari componenti. Nel caso volessi uscire subito, basta che schiacci il tasto 'Chiudi' in alto a destra su questa finestra. " },
    { componentName: "TopbarWidgetComponent", text: "Nella topbar potrai trovare la disponibilitá del server, l'URL del server a cui ti sei connesso e potrai passare anche alla dark mode! " },
    { componentName: "CodeEditorComponent", text: "In questa sezione avrai 3 strumenti importanti: output, Log API ed un terminale" },
    { componentName: "ExecbarWidgetComponent", text: "Qui invece sono presenti i bottoni per avviare l'esecuzione, fermarla oppure per verificare la soluzione con il server" },
    { componentName: "FileEditorWidgetComponent", text: "Come dice il nome, questo é un semplice file editor.." },
    { componentName: "FileExplorerWidgetComponent", text: "..e questo, invece un file explorer" },
    { componentName: "LogApiWidgetComponent", text: "LogApiWidgetComponent" },
    { componentName: "MonacoEditorWidgetComponent", text: "MonacoEditorWidgetComponent" },
    { componentName: "OutputWidgetComponent", text: "OutputWidgetComponent" },
    { componentName: "ProblemWidgetComponent", text: "Seleziona il problema" },
    { componentName: "TerminalWidgetComponent", text: "TerminalWidgetComponent" },
    { componentName: "End", text: "Grazie per aver completato il tour! Buon coding!" },
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
