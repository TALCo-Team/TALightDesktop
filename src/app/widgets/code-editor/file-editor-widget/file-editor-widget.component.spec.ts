import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileEditorWidgetComponent } from './file-editor-widget.component';

describe('FileEditorWidgetComponent', () => {
  let component: FileEditorWidgetComponent;
  let fixture: ComponentFixture<FileEditorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileEditorWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileEditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
