import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChart1Component } from './doughnut-chart1.component';

describe('DoughnutChart1Component', () => {
  let component: DoughnutChart1Component;
  let fixture: ComponentFixture<DoughnutChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutChart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
