import { ComponentFixture, TestBed } from 'node_modules/@angular/core/testing';

import { EditorFilesWidgetComponent } from './editor-files-widget.component';

describe('EditorFilesComponent', () => {
  let component: EditorFilesWidgetComponent;
  let fixture: ComponentFixture<EditorFilesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorFilesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorFilesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
