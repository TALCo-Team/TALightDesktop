import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalConsoleWidgetComponent } from './tal-console-widget.component';

describe('TalConsoleWidgetComponent', () => {
  let component: TalConsoleWidgetComponent;
  let fixture: ComponentFixture<TalConsoleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalConsoleWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalConsoleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
