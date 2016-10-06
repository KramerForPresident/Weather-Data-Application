/**
 * Created by pwluft on 2016-09-29.
 */

import { Component } from '@angular/core';
import { Entry} from './entry';

@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'form.component.html'
})

export class FormComponent{

    //TODO: get these from a service
    cities = ['Thunder Bay', 'Toronto', 'Barrie'];

    submitted = false;
    selectedCity = this.cities[0];
    selectedDate = 2012-10-09;

    changeDate(val){
        console.log("Date changed");
        this.selectedDate = val;
    }

    changeCity(val){
        console.log("City changed");
        this.selectedCity = val;
    }

    onSubmit() {
        console.log(this.selectedCity);
        console.log(this.selectedDate);
        this.submitted = true;
    }

}
