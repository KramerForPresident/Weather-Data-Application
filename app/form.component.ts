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

    //okay very bad code starting in 3-2-1 GO
    startDate = ["2016-11-25", "2016-11-26"];
    endDate = ["2016-11-25", "2016-11-26"];



    submitted = false;
    selectedCity = this.cities[0];
    //if this works then holy moly
    //startDate = "2016-08-30";
    //endDate = "2016-08-31";

    compMode = false;
    isValid = true;

    @Output() onSubmitted = new EventEmitter();
    @Output() onCompared = new EventEmitter();
    @Output() onCityChange = new EventEmitter();

    @Output() onCompClicked = new EventEmitter();




    changeStart(val, index){
        var sD = Date.parse(val);
        var eD = Date.parse(this.endDate[index]);

        if(sD > eD || val == ""){
            console.log("Not valid\n");
            this.startDate[index] = this.endDate[index];
        }
        else{
            console.log("Valid\n");
            this.startDate[index] = val;
        }
       // this.showStatus();
    }

    changeEnd(val, index){
        var sD = Date.parse(this.startDate[index]);
        var eD = Date.parse(val);

        if(sD > eD || val == ""){
            console.log("Not valid\n");
            this.endDate[index] = this.startDate[index];
        }
        else{
            console.log("Valid\n");
            this.endDate[index] = val;
        }
      //  this.showStatus();
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
            if (this.isValid == true) {
                this.getResults({city: this.selectedCity, start: this.startDate[0], end: this.endDate[0]});
            }
            else {
                console.log("Can't submit.");
            }
        }
        else{
            var formArray = [];

            for(var i = 0; i < this.startDate.length; i++){
                formArray.push({city: this.selectedCity, start: this.startDate[i], end: this.endDate[i]});
            }
            this.getComparison(formArray);


        }
    }


    //mostly for debugging
    showStatus(){
        //console.log(this.selectedCity);

        for (var i = 0; i < this.startDate.length; i++){
            console.log("Start[" + i + "]: " + this.startDate[i] + " End[" + i + "]: " + this.endDate[i] + "\n");
        }
    }


    changeCity(val){
        this.selectedCity = val;
        this.onCityChange.emit(this.selectedCity);
    }



    //these two functions might be redundant. whatever.
    getResults(data){
        //console.log(data);
        this.onSubmitted.emit(data);
    }

    getComparison(data){
        //console.log(data);
        this.onCompared.emit(data)
    }






}
