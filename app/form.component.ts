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
    startDate = "2012-08-30";
    endDate = "2012-08-31";



    changeDate(sVal, eVal){
        var sD = Date.parse(sVal);
        var eD = Date.parse(eVal);



        if(sD > eD){
            console.log("Not valid");
        }

        this.startDate = sVal;
        this.endDate = eVal;
        console.log(this.startDate);
        console.log(this.endDate);

    }

    changeCity(val){
        console.log("City changed");
        this.selectedCity = val;
    }

    onSubmit() {
        console.log(this.selectedCity);
        console.log(this.startDate);
        console.log(this.endDate);
        this.submitted = true;
    }

}
