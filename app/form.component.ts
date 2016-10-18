/**
 * Created by pwluft on 2016-09-29.
 */

import { Component } from '@angular/core';
import { Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Entry} from './entry';
import {ResultsComponent} from "./results.component"
import Result = jasmine.Result;

@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'form.component.html'
})

export class FormComponent{

    //TODO: get these from a service
    cities = ['Thunder Bay', 'Toronto', 'Barrie', "Phoenix"];

    submitted = false;
    selectedCity = this.cities[0];
    startDate = "2012-08-30";
    endDate = "2012-08-31";

    isValid = true;

    @Output() onSubmitted = new EventEmitter();



    //bindings don't update upon changing date for some reason
    //this does technically validate them though
    changeStart(val){
        var sD = Date.parse(val);
        var eD = Date.parse(this.endDate);

        if(sD > eD || val == ""){
            console.log("Not valid\n");
            this.startDate = this.endDate;
        }
        else{
            console.log("Valid\n");
            this.startDate = val;
        }
        this.showStatus();
    }

    changeEnd(val){
        var sD = Date.parse(this.startDate);
        var eD = Date.parse(val);

        if(sD > eD || val == ""){
            console.log("Not valid\n");
            this.endDate = this.startDate;
        }
        else{
            console.log("Valid\n");
            this.endDate = val;
        }
        this.showStatus();
    }

    //mostly for debugging
    showStatus(){
        //console.log(this.selectedCity);
        console.log("Start:\t" + this.startDate + "\nEnd:\t" + this.endDate);
    }


    changeCity(val){
        this.selectedCity = val;
    }

    onSubmit() {
        this.submitted = true;

        if (this.isValid == true){
            this.getService(this.selectedCity, this.startDate, this.endDate);
        }
        else{
            console.log("Can't submit.");
        }
    }




    //TODO: send this stuff to a service...
    getService(city, start, end){
        // console.log("Sending to service");
        // console.log(city);
        // console.log(start);
        // console.log(end);

        this.onSubmitted.emit(null);


    }



}
