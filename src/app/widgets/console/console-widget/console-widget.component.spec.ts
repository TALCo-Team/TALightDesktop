import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleWidgetComponent } from './console-widget.component';

describe('ConsoleWidgetComponent', () => {
  let component: ConsoleWidgetComponent;
  let fixture: ComponentFixture<ConsoleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsoleWidgetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConsoleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
