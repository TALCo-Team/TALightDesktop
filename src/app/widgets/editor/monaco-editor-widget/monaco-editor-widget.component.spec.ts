import { ComponentFixture, TestBed } from 'node_modules/@angular/core/testing';

import { MonacoEditorWidgetComponent } from './monaco-editor-widget.component';

describe('EditorViewComponent', () => {
  let component: MonacoEditorWidgetComponent;
  let fixture: ComponentFixture<MonacoEditorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacoEditorWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonacoEditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
