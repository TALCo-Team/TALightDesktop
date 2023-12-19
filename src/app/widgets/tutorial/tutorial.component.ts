import { AsyncAwaitService } from './../../../../../my-first-angular-project/src/app/async-await-serice/async-await.service';
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
  indexCurrentTutorial: number = 0
  tutorialTitle = ""
  tutorialText = "";
  backButtonDisabled = true;
  closeHidden = false;
  testo = "Avanti"
  theme = "light"


  constructor(private tutorialService: TutorialService,) {
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.showTutorial(tutorial) })
    this.tutorialService.onTutorialClose.subscribe(() => { this.closeTutorial() })
  }

  ngAfterViewInit() {
    if(this.tutorialService.getCachedTutorial() === "true"){
      console.log("Tutorial già completato")
      this.closeTutorialButton()
    }
    else{
      console.log("Tutorial non ancora completato")
      this.isTutorialCompleted()
      this.tutorialService.nextTutorial(this.indexCurrentTutorial)  //ÑON BLURRA GLI ALTRI COMPONENTI
    }
  }

  public isTutorialCompleted() {
    console.log("TutorialComponent:isTutorialCompleted")
    this.isVisible = true
  }

  public nextTutorialButton() {
    console.log("TutorialComponent:nextTutorialButton")
    this.indexCurrentTutorial += 1
    this.tutorialService.nextTutorial(this.indexCurrentTutorial)
    if (this.indexCurrentTutorial > 0) {
      this.backButtonDisabled = false
    }
    if (this.indexCurrentTutorial == 11) {
      this.closeHidden = true
      this.testo = "Fine"
    }
  }

  public prevTutorialButton() {
    console.log("TutorialComponent:previousTutorialButton")
    this.indexCurrentTutorial -= 1
    this.tutorialService.previousTutorial(this.indexCurrentTutorial)
    if (this.indexCurrentTutorial > 0) {
      this.closeHidden = false
      this.testo = "Avanti"
    }
    else {
      this.backButtonDisabled = true
    }
  }

  public closeTutorialButton() {
    console.log("TutorialComponent:closeTutorialButton")
    this.tutorialService.closeTutorial()
  }

  public showTutorial(tutorial: any) {
    console.log("TutorialComponent:showTutorial")
    this.tutorialText = tutorial.text
    this.tutorialTitle = tutorial.componentName.toUpperCase()
  }

  public closeTutorial() {
    console.log("TutorialComponent:closeTutorial")
    this.isVisible = false
  }
}

