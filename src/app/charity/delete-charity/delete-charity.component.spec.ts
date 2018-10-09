import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCharityComponent } from './delete-charity.component';

describe('DeleteCharityComponent', () => {
  let component: DeleteCharityComponent;
  let fixture: ComponentFixture<DeleteCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
