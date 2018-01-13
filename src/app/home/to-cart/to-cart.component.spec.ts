import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCartComponent } from './to-cart.component';

describe('ToCartComponent', () => {
  let component: ToCartComponent;
  let fixture: ComponentFixture<ToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
