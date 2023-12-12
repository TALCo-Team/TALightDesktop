import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { CodeEditorComponent } from 'src/app/widgets/code-editor/code-editor/code-editor.component';
@Component({
  selector: 'tal-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit, AfterViewInit{

  @ViewChild(CodeEditorComponent) codeEditor: CodeEditorComponent | undefined;

  isVisible: boolean = false;
  indexCurrentTutorial: number = 0
  tutorialText = "";
  backButtonDisabled = true;
  closeHidden = false;
  testo = "Avanti"

  constructor(private tutorialService: TutorialService, private renderer: Renderer2) {
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.showTutorial(tutorial) })
    this.tutorialService.onTutorialClose.subscribe(() => { this.closeTutorial() })
  }
  ngAfterViewInit(): void {
    if(this.codeEditor) {
      const codeEditorSizes = this.codeEditor;
    }
    // const execbar-widget-sizes;
    // const file-editor-widget-sizes;
    // const file-explorer-widget-sizes;
    // const log-api-widget-sizes;
    // const monaco-editor-widget-sizes;
    // const output-widget-sizes;
    // const problem-widget-sizes;
    // const terminal-widget-sizes;
  }

  ngOnInit(): void {
    this.isTutorialCompleted()
    this.tutorialService.nextTutorial(this.indexCurrentTutorial)  //ÑON BLURRA GLI ALTRI COMPONENTI
  }

  // TODO if tutorial in cache -> dont show
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
    this.tutorialPosition()
    ElementRef el = new ElementRef();
    const altraComponenteElement =this.codeEditor?.
  }

  public prevTutorialButton() {
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

  public closeTutorialButton() {
    console.log("TutorialComponent:closeTutorialButton")
    this.tutorialService.closeTutorial()
  }

  public showTutorial(tutorial: any) {
    console.log("TutorialComponent:showTutorial")
    this.tutorialText = tutorial.text
  }

  public closeTutorial() {
    console.log("TutorialComponent:closeTutorial")
    this.isVisible = false
  }

  private calculatePosition(element: ElementRef)
  {
    console.log("Calcolo in corso")
    const rect = element.nativeElement.getBoundingClientRect();
    console.log("rect é stato caricato")
    const x = rect.left+window.scrollX;
    const y = rect.top+window.scrollY;
    const width = rect.width;
    const height = rect.height;
    return { x, y, width, height };
  }

  // TODO: modificare la posizione della card in base al componente
  public tutorialPosition() {
    console.log("TutorialComponent:tutorialPosition")
    const cardElement = this.el.nativeElement.querySelector('.tutorial_card');
    const { x, y, width, height } = this.calculatePosition(this.el.nativeElement.querySelector('.topbar'));
    switch (this.indexCurrentTutorial) {
      case 0:
        console.log("Altezza"+ height);
        break;
      case 1:
        console.log("*************Altezza"+ height);
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 2:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 3:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 4:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 5:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 6:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 7:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 8:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 9:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 10:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      case 11:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
      default:
        this.renderer.setStyle(cardElement, 'width', '50%');
        this.renderer.setStyle(cardElement, 'height', '50%');
        break;
    }
  }

}

