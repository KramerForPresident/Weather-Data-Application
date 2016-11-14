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

    //TODO: get these from a service... via polled cities
    cities = ['Thunder Bay', 'Toronto', 'Barrie', "Phoenix"];

    submitted = false;
    selectedCity = this.cities[0];
    startDate = "2016-08-30";
    endDate = "2016-08-31";
    compMode = false;
    isValid = true;

    @Output() onSubmitted = new EventEmitter();
    @Output() onCompClicked = new EventEmitter();


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
      //  this.showStatus();
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
        //this.showStatus();
    }


    compClicked(){
        if (this.compMode == false){
            this.compMode = true;
        }
        else{
            this.compMode = false;
        }
        this.onCompClicked.emit(this.compMode);
        //console.log("Emitting " + this.compMode);
    }

    submitClicked() {
        this.submitted = true;

        if(this.compMode != true) {
            console.log("Submitted in results mode");

            if (this.isValid == true) {
                this.getService(this.selectedCity, this.startDate, this.endDate);
            }
            else {
                console.log("Can't submit.");
            }
        }
        else{
            console.log("Submitted in comparison mode");
        }
    }


    //mostly for debugging
    showStatus(){
        //console.log(this.selectedCity);
        console.log("Start:\t" + this.startDate + "\nEnd:\t" + this.endDate);
    }


    changeCity(val){
        this.selectedCity = val;
    }



    getService(city, start, end){
        console.log("Sending to service...");
        this.onSubmitted.emit({"city": city, "start": start, "end": end});
    }





}
