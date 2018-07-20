import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { WizardDataService } from '../wizard-data.service'

@Component({
  selector: 'app-get-shipping-option',
  templateUrl: './get-shipping-option.component.html',
  styleUrls: ['./get-shipping-option.component.css']
})
export class GetShippingOptionComponent implements OnInit {
  title = 'Please Enter your Shipping Method.';
  ship: string;
  form: any;
  constructor(private router: Router, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.ship = this.wizardDataService.getShippingMethod();
  }
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.wizardDataService.setShippingMethod(this.ship);
    return true;
  }
  goToPrevious(form: any) {
    if (this.save(form)) {
        this.router.navigate(['/sender']);
    }
}

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/weight']);
    }
  }

}
