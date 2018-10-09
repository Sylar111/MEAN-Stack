import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharityComponent } from './new-charity.component';

describe('NewCharityComponent', () => {
  let component: NewCharityComponent;
  let fixture: ComponentFixture<NewCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
