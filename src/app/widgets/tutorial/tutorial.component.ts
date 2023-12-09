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

  constructor( private tutorialService : TutorialService) {
    this.tutorialService.onTutorialChange.subscribe( (tutorial)=>{this.showTutorial(tutorial)} )
    this.tutorialService.onTutorialClose.subscribe( ()=>{this.closeTutorial()} )
   }

  ngOnInit(): void {
    this.isTutorialCompleted()
    this.tutorialService.nextTutorial(this.indexCurrentTutorial)  //ÑON BLURRA GLI ALTRI COMPONENTI
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

