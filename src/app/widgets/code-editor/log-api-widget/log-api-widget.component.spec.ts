import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogApiWidgetComponent } from './log-api-widget.component';

describe('LogApiWidgetComponent', () => {
  let component: LogApiWidgetComponent;
  let fixture: ComponentFixture<LogApiWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogApiWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogApiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
