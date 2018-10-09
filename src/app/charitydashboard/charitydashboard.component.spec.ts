import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitydashboardComponent } from './charitydashboard.component';

describe('CharitydashboardComponent', () => {
  let component: CharitydashboardComponent;
  let fixture: ComponentFixture<CharitydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
