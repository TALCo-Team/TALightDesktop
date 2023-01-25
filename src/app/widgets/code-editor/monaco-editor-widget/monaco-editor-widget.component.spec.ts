import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoEditorWidgetComponent } from './monaco-editor-widget.component';

describe('MonacoEditorWidgetComponent', () => {
  let component: MonacoEditorWidgetComponent;
  let fixture: ComponentFixture<MonacoEditorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacoEditorWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonacoEditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
