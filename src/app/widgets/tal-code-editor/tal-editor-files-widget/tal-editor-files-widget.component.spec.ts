import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalEditorFilesWidgetComponent } from './tal-editor-files-widget.component';

describe('TalEditorFilesWidgetComponent', () => {
  let component: TalEditorFilesWidgetComponent;
  let fixture: ComponentFixture<TalEditorFilesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalEditorFilesWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalEditorFilesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
