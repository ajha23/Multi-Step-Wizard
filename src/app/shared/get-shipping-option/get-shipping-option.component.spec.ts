import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetShippingOptionComponent } from './get-shipping-option.component';

describe('GetShippingOptionComponent', () => {
  let component: GetShippingOptionComponent;
  let fixture: ComponentFixture<GetShippingOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetShippingOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetShippingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
