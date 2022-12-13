import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProblemViewComponent } from './select-problem-view.component';

describe('SelectProblemViewComponent', () => {
  let component: SelectProblemViewComponent;
  let fixture: ComponentFixture<SelectProblemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProblemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectProblemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
