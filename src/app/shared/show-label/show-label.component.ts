import { Component, OnInit, Input } from '@angular/core';

import { FormData } from '../FormData.model';
import { WizardDataService } from '../wizard-data.service'

@Component({
  selector: 'app-show-label',
  templateUrl: './show-label.component.html',
  styleUrls: ['./show-label.component.css']
})
export class ShowLabelComponent implements OnInit {
  title = 'Thanks for shipping with us !!';
  formData: FormData;
  isFormValid: boolean = false;
  
  constructor(private wizardDataService: WizardDataService) {
  }

  ngOnInit() {
    const shippingRate = 0.40;
      this.formData = this.wizardDataService.getFormData();
      this.formData.rate=shippingRate*this.formData.weight*(this.formData.shippingoption === "Ground" ? 1 : 1.5);
      this.isFormValid = this.wizardDataService.isFormValid();
  }

  submit() {
      //this.formData = this.wizardDataService.resetFormData();
      this.isFormValid = false;
  }
}
