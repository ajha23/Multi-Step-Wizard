import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../FormData.model';
import { WizardDataService } from '../wizard-data.service'

@Component({
  selector: 'app-get-sender-address',
  templateUrl: './get-sender-address.component.html',
  styleUrls: ['./get-sender-address.component.css']
})
export class GetSenderAddressComponent implements OnInit {
  title = 'Please Enter your Address.';
  address: Address;
  form: any;
  constructor(private router: Router, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.address = this.wizardDataService.getSenderAddress();
  }
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.wizardDataService.setSenderAddress(this.address);
    return true;
  }
  goToPrevious(form: any) {
    if (this.save(form)) {
        this.router.navigate(['/receiver']);
    }
}

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/ship']);
    }
  }
}
