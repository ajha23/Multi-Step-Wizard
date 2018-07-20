import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { WizardComponent } from './wizard/wizard.component';
import { GetSenderAddressComponent } from './get-sender-address/get-sender-address.component';
import { GetReceiverAddressComponent } from './get-receiver-address/get-receiver-address.component';
import { GetWeightComponent } from './get-weight/get-weight.component';
import { GetShippingOptionComponent } from './get-shipping-option/get-shipping-option.component';
import { ShowLabelComponent } from './show-label/show-label.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [WizardComponent, GetSenderAddressComponent, GetReceiverAddressComponent, GetWeightComponent, GetShippingOptionComponent, ShowLabelComponent],
  exports: [
    WizardComponent
  ]
})
export class SharedModule { }
