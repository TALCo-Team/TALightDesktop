import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { CodeEditorComponent } from 'src/app/widgets/code-editor/code-editor/code-editor.component';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';
@Component({
  selector: 'tal-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})

export class TutorialComponent implements AfterViewInit {
  isVisible: boolean = false;
  indexCurrentTutorial: number = -1
  tutorialTitle = ""
  tutorialText = "";
  backButtonDisabled = true;
  testo = "Avanti"
  theme = "light"


  constructor(private tutorialService: TutorialService,) {
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.showTutorial(tutorial) })
    this.tutorialService.onTutorialClose.subscribe(() => { this.closeTutorial() })
    this.tutorialService.onIndexTutorialChange.subscribe((indexCurrentTutorials) => { this.setIndex(indexCurrentTutorials) })
  }
  // É sporca ma l'abbiamo fatto cosí perché é piú facile da capire, meno dispendioso in termini di tempo e risorse
  // e non abbiamo bisogno di un componente in piú
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.tutorialService.getCachedTutorial() === "true") {
        console.log("Tutorial già completato")
        this.closeTutorialButton()
      }
      else {
        console.log("Tutorial non ancora completato")
        // this.isTutorialCompleted()
        this.tutorialService.nextTutorial(this.indexCurrentTutorial)  //ÑON BLURRA GLI ALTRI COMPONENTI
      }
    }, 1);
  }

  // public isTutorialCompleted() {
  //   console.log("TutorialComponent:isTutorialCompleted")
  //   this.isVisible = true
  // }

  public setIndex(indexCurrentTutorials: number) {
    console.log("TutorialComponent:setIndex")
    this.tutorialTitle = indexCurrentTutorials + ''
    this.indexCurrentTutorial = indexCurrentTutorials
  }

  public nextTutorialButton() {
    console.log("TutorialComponent:nextTutorialButton")
    if (this.indexCurrentTutorial < this.tutorialService.getSizeTutorial() - 1) {
      this.tutorialService.nextTutorial(this.indexCurrentTutorial)
    }
    else {
      this.tutorialService.closeTutorial()
    }
  }

  public prevTutorialButton() {
    console.log("TutorialComponent:previousTutorialButton")
    this.tutorialService.previousTutorial(this.indexCurrentTutorial)
    if ( this.indexCurrentTutorial === 0) {
      this.backButtonDisabled = true
    }
  }

  public closeTutorialButton() {
    console.log("TutorialComponent:closeTutorialButton")
    this.tutorialService.closeTutorial()
  }

  public showTutorial(tutorial: any) {
    console.log("TutorialComponent:showTutorial")

    if (tutorial.componentName === "Begin") {
      this.testo = "Avanti"
      this.backButtonDisabled = true
    }
    else if (tutorial.componentName === "End") {
      this.testo = "Fine"
    }
    else {
      this.testo = "Avanti"
      this.backButtonDisabled = false;
    }

    this.tutorialText = tutorial.text
    this.tutorialTitle = tutorial.componentName.toUpperCase()
    this.isVisible = true
  }

  public closeTutorial() {
    console.log("TutorialComponent:closeTutorial")
    this.isVisible = false
  }
}

