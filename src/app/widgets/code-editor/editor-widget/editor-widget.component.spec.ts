import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorWidgetComponent } from './editor-widget.component';

describe('EditorWidgetComponent', () => {
  let component: EditorWidgetComponent;
  let fixture: ComponentFixture<EditorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
