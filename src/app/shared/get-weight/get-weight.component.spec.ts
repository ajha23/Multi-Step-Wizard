import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWeightComponent } from './get-weight.component';

describe('GetWeightComponent', () => {
  let component: GetWeightComponent;
  let fixture: ComponentFixture<GetWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
