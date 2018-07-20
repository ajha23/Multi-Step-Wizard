import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GetReceiverAddressComponent} from '../shared/get-receiver-address/get-receiver-address.component';
import {GetSenderAddressComponent} from '../shared/get-sender-address/get-sender-address.component';
import {GetShippingOptionComponent} from '../shared/get-shipping-option/get-shipping-option.component';
import {GetWeightComponent} from '../shared/get-weight/get-weight.component';
import {ShowLabelComponent} from '../shared/show-label/show-label.component'

const routes: Routes = [
  { path: '', redirectTo: '/receiver', pathMatch: 'full' },
  { path: 'receiver', component: GetReceiverAddressComponent },
  { path: 'sender', component: GetSenderAddressComponent },
  { path: 'ship', component: GetShippingOptionComponent },
  { path: 'weight', component: GetWeightComponent },
  { path: 'label', component: ShowLabelComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
