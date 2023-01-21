import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarWidgetComponent } from './topbar-widget.component';

describe('TopbarWidgetComponent', () => {
  let component: TopbarWidgetComponent;
  let fixture: ComponentFixture<TopbarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
