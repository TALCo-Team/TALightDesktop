import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorWidgetComponent } from './code-editor-widget.component';

describe('CodeEditorWidgetComponent', () => {
  let component: CodeEditorWidgetComponent;
  let fixture: ComponentFixture<CodeEditorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeEditorWidgetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CodeEditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
