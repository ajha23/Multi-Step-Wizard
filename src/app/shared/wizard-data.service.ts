import { Injectable } from '@angular/core';

import { FormData, Address } from './formData.model'

@Injectable({
  providedIn: 'root'
})
export class WizardDataService {
  private formData: FormData = new FormData();
  private isReceiverFormValid: boolean = false;
  private isSenderFormValid: boolean = false;
  private isShippinFormValid: boolean = false;
  private isWeightFormValid: boolean = false;

  getSenderAddress(): Address {

    var address: Address = {
      name: this.formData.senderAddress.name,
      street: this.formData.senderAddress.street,
      city: this.formData.senderAddress.city,
      state: this.formData.senderAddress.state,
      zip: this.formData.senderAddress.zip
    };
    return address;
  }

  setSenderAddress(data: Address) {
    this.isSenderFormValid = true;
    this.formData.senderAddress.name = data.name;
    this.formData.senderAddress.street = data.street;
    this.formData.senderAddress.city = data.city;
    this.formData.senderAddress.state = data.state;
    this.formData.senderAddress.zip = data.zip;
  }

  getReceiverAddress(): Address {

    var address: Address = {
      name: this.formData.receiverAddress.name,
      street: this.formData.receiverAddress.street,
      city: this.formData.receiverAddress.city,
      state: this.formData.receiverAddress.state,
      zip: this.formData.receiverAddress.zip
    };
    return address;
  }

  setReceiverAddress(data: Address) {
    this.isReceiverFormValid = true;
    this.formData.receiverAddress.name = data.name;
    this.formData.receiverAddress.street = data.street;
    this.formData.receiverAddress.city = data.city;
    this.formData.receiverAddress.state = data.state;
    this.formData.receiverAddress.zip = data.zip;
  }

  

  getWeight(): number {
    var weight = this.formData.weight;
    return weight;
  }

  setWeight(weight: number) {
    this.isWeightFormValid = true;
    this.formData.weight = weight;
  }

  getShippingMethod(): string {
    var shippingMethod = this.formData.shippingoption;
    return shippingMethod
  }

  setShippingMethod(data: string) {
    this.isShippinFormValid = true;
    this.formData.shippingoption = data;
  }

  getFormData(): FormData {
    return this.formData;
  }

  resetFormData(): FormData {
    this.formData.clear();
    this.isReceiverFormValid = this.isSenderFormValid = this.isShippinFormValid = this.isWeightFormValid = false;
    return this.formData;
  }

  isFormValid() {
    return this.isReceiverFormValid &&
      this.isSenderFormValid &&
      this.isShippinFormValid &&
      this.isWeightFormValid;
  }

}
