import { ComponentFixture, TestBed } from 'node_modules/@angular/core/testing';

import { CodemirrorEditorWidgetComponent as CodemirrorEditorWidgetComponent } from './codemirror-editor-widget.component';

describe('EditorViewComponent', () => {
  let component: CodemirrorEditorWidgetComponent;
  let fixture: ComponentFixture<CodemirrorEditorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodemirrorEditorWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemirrorEditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
