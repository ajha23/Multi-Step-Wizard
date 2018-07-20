import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../FormData.model';
import { WizardDataService } from '../wizard-data.service'

@Component({
  selector: 'app-get-receiver-address',
  templateUrl: './get-receiver-address.component.html',
  styleUrls: ['./get-receiver-address.component.css']
})
export class GetReceiverAddressComponent implements OnInit {
  title = 'Please Enter Receiver Address.';
  address: Address;
  form: any;
  hidden=false;
  constructor(private router: Router, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.address = this.wizardDataService.getReceiverAddress();
  }
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.wizardDataService.setReceiverAddress(this.address);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/sender']);
    }
  }

}
