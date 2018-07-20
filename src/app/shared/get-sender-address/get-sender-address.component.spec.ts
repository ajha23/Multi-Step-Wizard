import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSenderAddressComponent } from './get-sender-address.component';

describe('GetSenderAddressComponent', () => {
  let component: GetSenderAddressComponent;
  let fixture: ComponentFixture<GetSenderAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSenderAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSenderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
