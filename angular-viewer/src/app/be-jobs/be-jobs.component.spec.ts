import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeJobsComponent } from './be-jobs.component';

describe('BeJobsComponent', () => {
  let component: BeJobsComponent;
  let fixture: ComponentFixture<BeJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
