import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WizardDataService } from '../wizard-data.service'

@Component({
  selector: 'app-get-weight',
  templateUrl: './get-weight.component.html',
  styleUrls: ['./get-weight.component.css']
})
export class GetWeightComponent implements OnInit {
  title = 'Please Enter Weight.';
  weight: string;
  form: any;
  constructor(private router: Router, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.weight = this.wizardDataService.getWeight();
  }
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.wizardDataService.setWeight(this.weight);
    return true;
  }
  goToPrevious(form: any) {
    if (this.save(form)) {
    this.router.navigate(['/ship']);
    }
  }

  goToNext(form: any) {
     if (this.save(form)) {
    this.router.navigate(['/label']);
    }
  }
}
