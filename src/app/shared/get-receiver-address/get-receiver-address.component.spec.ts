import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReceiverAddressComponent } from './get-receiver-address.component';

describe('GetReceiverAddressComponent', () => {
  let component: GetReceiverAddressComponent;
  let fixture: ComponentFixture<GetReceiverAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetReceiverAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReceiverAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
