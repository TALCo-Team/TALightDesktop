import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecbarWidgetComponent } from './execbar-widget.component';

describe('ExecbarWidgetComponent', () => {
  let component: ExecbarWidgetComponent;
  let fixture: ComponentFixture<ExecbarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecbarWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecbarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
