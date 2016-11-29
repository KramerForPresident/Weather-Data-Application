/**
 * Created by pwluft on 2016-09-29.
 */

import { Component } from '@angular/core';
import { Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Entry} from './entry';
import {ResultsComponent} from "./results.component"
import { OnInit } from '@angular/core';

import Result = jasmine.Result;
import {CityService} from "./city.service";


@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit{

    //TODO: get these from a service... via polled cities
   // cities = ['Thunder Bay', 'Toronto', 'Barrie', "Phoenix"];
    cities = [];


    //okay very bad code starting in 3-2-1 GO
    startDate = "2016-11-28";
    endDate = "2016-11-28";

    compDate1 = "2016-11-28";
    compDate2 = "2016-11-28"

    submitted = false;
    selectedCity;

    compCity1;
    compCity2;

    pollMode = false;


    compMode = false;
    isValid = true;

    @Output() onSubmitted = new EventEmitter();
    @Output() onCompared = new EventEmitter();
    @Output() onCityChange = new EventEmitter();
    @Output() onCompClicked = new EventEmitter();



    constructor(private cityService: CityService){}

    ngOnInit(): void {
        this.retrievePolledCities();
    }


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
       // this.showStatus();
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
                this.getResults({city: this.selectedCity, start: this.startDate, end: this.endDate});
            }
            else {
                console.log("Can't submit.");
            }
        }
        else{
            var formArray = [];

            //THE FOLLOWING CODE IS REALLY JANKY
            //I'M SORRY I'M SORRY I'M SORRYYY
            formArray.push({city: this.compCity1, start: this.compDate1, end: this.compDate1});
            formArray.push({city: this.compCity2, start: this.compDate2, end: this.compDate2});

            this.getComparison(formArray);


        }
    }


    managedClicked(){

        if(this.pollMode == false){
            this.pollMode = true;
        }
        else{
            this.pollMode = false;
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





    comparisonData(c1, c2, d1, d2){
        this.compCity1 = c1;
        this.compCity2 = c2;
        this.compDate1 = d1;
        this.compDate2 = d2;
        //
        // console.log(this.compCity1);
        // console.log(this.compDate1);
        // console.log(this.compCity2);
        // console.log(this.compDate2);
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

    retrievePolledCities(){
        this.cityService.getCities().then(dt => this.myCallBack(dt));

    }


    addCity(val1, val2){
        var input = {city: val1, country: val2};
        this.cityService.addCity(input);
    }





    private myCallBack(input){

        for(var i = 0; i < input.length; i++){
            this.cities.push(input[i]);
        }
        this.changeCity(this.cities[0].name);
        this.comparisonData(this.cities[0].name, this.cities[0].name, this.compDate1, this.compDate2);

    }





}
