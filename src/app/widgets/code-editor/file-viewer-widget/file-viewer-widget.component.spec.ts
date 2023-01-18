import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewerWidgetComponent } from './file-viewer-widget.component';

describe('FileViewerWidgetComponent', () => {
  let component: FileViewerWidgetComponent;
  let fixture: ComponentFixture<FileViewerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileViewerWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileViewerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
