import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemWidgetComponent } from './problem-widget.component';

describe('ProblemWidgetComponent', () => {
  let component: ProblemWidgetComponent;
  let fixture: ComponentFixture<ProblemWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemWidgetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProblemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
