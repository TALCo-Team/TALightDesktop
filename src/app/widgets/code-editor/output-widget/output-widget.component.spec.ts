import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputWidgetComponent } from './output-widget.component';

describe('OutputWidgetComponent', () => {
  let component: OutputWidgetComponent;
  let fixture: ComponentFixture<OutputWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputWidgetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OutputWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
