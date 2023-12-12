import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';


@Component({
  selector: 'tal-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  isVisible: boolean = false;
  indexCurrentTutorial : number = 0
  tutorialText = "";
  backButtonDisabled = true;
  closeHidden = false;
  testo = "Avanti"

  constructor( private tutorialService : TutorialService) {
    this.tutorialService.onTutorialChange.subscribe( (tutorial)=>{this.showTutorial(tutorial)} )
    this.tutorialService.onTutorialClose.subscribe( ()=>{this.closeTutorial()} )
   }

  ngOnInit(): void {
    this.isTutorialCompleted()
    this.tutorialService.nextTutorial(this.indexCurrentTutorial)  //ÑON BLURRA GLI ALTRI COMPONENTI
    this.tutorialService.prevTutorial(this.indexCurrentTutorial)
  }

  // TODO if tutorial in cache -> dont show
  public isTutorialCompleted(){
    console.log("TutorialComponent:isTutorialCompleted")
    this.isVisible = true
  }

  public nextTutorialButton(){
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

  public prevTutorialButton(){
    console.log("TutorialComponent:prevTutorialButton")
    this.indexCurrentTutorial -= 1
    this.tutorialService.prevTutorial(this.indexCurrentTutorial)
    if (this.indexCurrentTutorial > 0) {
      this.closeHidden = false
      this.testo = "Avanti"
    }
    else {
      this.backButtonDisabled = true
    }
  }

  public closeTutorialButton(){
    console.log("TutorialComponent:closeTutorialButton")
    this.tutorialService.closeTutorial()
  }

  public showTutorial(tutorial: any){
    console.log("TutorialComponent:showTutorial")
    this.tutorialText = tutorial.text
  }

  public closeTutorial(){
    console.log("TutorialComponent:closeTutorial")
    this.isVisible = false
  }

  // TODO
  public tutorialPosition(){
    console.log("TutorialComponent:tutorialPosition")
  }


}

