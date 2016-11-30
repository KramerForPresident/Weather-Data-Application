/**
 * Created by pwluft on 2016-09-29.
 */

import { Component } from '@angular/core';
import { Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { OnInit } from '@angular/core';

import Result = jasmine.Result;
import {CityService} from "./city.service";


@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit{

    //cities array starts out empty, until we initialize component and call "get"
    cities = [];


    //initialize default dates input boxes
    startDate = "2016-11-28";
    endDate = "2016-11-28";

    //comp dates reflect date parameters in comp mode
    compDate1 = "2016-11-28";
    compDate2 = "2016-11-28";

    pollMode = false;
    compMode = false;
    isValid = true;
    submitted = false;

    selectedCity;
    compCity1;
    compCity2;

    //output event objects that get emitted to parent component
    @Output() onSubmitted = new EventEmitter();
    @Output() onCompared = new EventEmitter();
    @Output() onCityChange = new EventEmitter();
    @Output() onCompClicked = new EventEmitter();


    constructor(private cityService: CityService){}

    //when component is initialized, retrieve the cities
    ngOnInit(): void {
        this.retrievePolledCities();
    }

    //====================================================================================
    //HTML FORM VIEW COMPONENTS
    //====================================================================================

    //first date parameter was changed
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

    //second date parameter changed
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

    //compare button click handler
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

    //submit button click handler
    submitClicked() {
        this.submitted = true;

        if(this.compMode != true) {
            //submit in regular mode
            if (this.isValid == true) {
                this.getResults({city: this.selectedCity, start: this.startDate, end: this.endDate});
            }
            else {
                console.log("Can't submit.");
            }
        }
        else{
            //submit in compare mode
            var formArray = [];

            formArray.push({city: this.compCity1, start: this.compDate1, end: this.compDate1});
            formArray.push({city: this.compCity2, start: this.compDate2, end: this.compDate2});
            this.getComparison(formArray);
        }
    }

    //manage city button click handler
    managedClicked(){
        if(this.pollMode == false){
            this.pollMode = true;
        }
        else{
            this.pollMode = false;
        }
    }

    //delete was clicked besides whatever city
    deleteClicked(input){
        this.delCity(input.id);
    }

    //mostly for debugging
    showStatus(){
        //console.log(this.selectedCity);

        for (var i = 0; i < this.startDate.length; i++){
            console.log("Start[" + i + "]: " + this.startDate[i] + " End[" + i + "]: " + this.endDate[i] + "\n");
        }
    }
    //when city is changed in dropdown menu
    changeCity(val){

        this.selectedCity = val;
        this.onCityChange.emit(this.selectedCity);
    }


    //====================================================================================
    //DATA RETRIEVAL FUNCTIONS
    //====================================================================================


    //emits submit event to parent app component
    getResults(data){
        //console.log(data);
        this.onSubmitted.emit(data);
    }

    //emits compareclicked event to parent app component
    getComparison(data){
        //console.log(data);
        this.onCompared.emit(data)
    }

    //add city to active ones
    addCity(val1, val2){
        var form = {id: 0, name: val1, countryCode: val2, active: "Y"};
        this.cityService.addCity(form);
        this.cities.push(form);

        //this.cityService.addCity(input).then(dt => console.log(dt));
    }

    //remove city as active
    delCity(val){
        this.cityService.deleteCity(val);
        for(var i = 0; i < this.cities.length; i++){
            if(this.cities[i].id == val){
                this.cities.splice(i, 1);
            }
        }

       // this.cityService.deleteCity(val).subscribe(dt => console.log(dt));
    }


    //calls city service to get all active cities
    retrievePolledCities(){
        this.cityService.getCities().then(dt => this.myCallBack(dt));

    }


    //sets the comparison data
    comparisonData(c1, c2, d1, d2){
        this.compCity1 = c1;
        this.compCity2 = c2;
        this.compDate1 = d1;
        this.compDate2 = d2;

    }



    //callback function for retrievePolledCities()
    //adds all retrieved cities to local array
    private myCallBack(input){
        for(var i = 0; i < input.length; i++){
            console.log(input[i]);
            this.cities.push(input[i]);

        }
        this.changeCity(this.cities[0].name);
        this.comparisonData(this.cities[0].name, this.cities[1].name, this.compDate1, this.compDate2);

    }





}
