import { ComponentFixture, TestBed } from 'node_modules/@angular/core/testing';

import { EditorWidgetComponent as EditorWidgetComponent } from './editor-widget.component';

describe('EditorViewComponent', () => {
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
