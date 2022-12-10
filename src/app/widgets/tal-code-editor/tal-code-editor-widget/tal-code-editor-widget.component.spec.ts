import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalCodeEditorWidgetComponent } from './tal-code-editor-widget.component';

describe('TalCodeEditorWidgetComponent', () => {
  let component: TalCodeEditorWidgetComponent;
  let fixture: ComponentFixture<TalCodeEditorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalCodeEditorWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalCodeEditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
