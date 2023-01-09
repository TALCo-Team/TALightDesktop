import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFilesWidgetComponent } from './editor-files-widget.component';

describe('EditorFilesWidgetComponent', () => {
  let component: EditorFilesWidgetComponent;
  let fixture: ComponentFixture<EditorFilesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorFilesWidgetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditorFilesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
