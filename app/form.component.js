/**
 * Created by pwluft on 2016-09-29.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var core_3 = require('@angular/core');
var city_service_1 = require("./city.service");
var FormComponent = (function () {
    function FormComponent(cityService) {
        this.cityService = cityService;
        //cities array starts out empty, until we initialize component and call "get"
        this.cities = [];
        //initialize default dates input boxes
        this.startDate = "2016-11-28";
        this.endDate = "2016-11-28";
        //comp dates reflect date parameters in comp mode
        this.compDate1 = "2016-11-28";
        this.compDate2 = "2016-11-28";
        this.pollMode = false;
        this.compMode = false;
        this.isValid = true;
        this.submitted = false;
        //output event objects that get emitted to parent component
        this.onSubmitted = new core_3.EventEmitter();
        this.onCompared = new core_3.EventEmitter();
        this.onCityChange = new core_3.EventEmitter();
        this.onCompClicked = new core_3.EventEmitter();
    }
    //when component is initialized, retrieve the cities
    FormComponent.prototype.ngOnInit = function () {
        this.retrievePolledCities();
    };
    //====================================================================================
    //HTML FORM VIEW COMPONENTS
    //====================================================================================
    //first date parameter was changed
    FormComponent.prototype.changeStart = function (val) {
        var sD = Date.parse(val);
        var eD = Date.parse(this.endDate);
        if (sD > eD || val == "") {
            console.log("Not valid\n");
            this.startDate = this.endDate;
        }
        else {
            console.log("Valid\n");
            this.startDate = val;
        }
        // this.showStatus();
    };
    //second date parameter changed
    FormComponent.prototype.changeEnd = function (val) {
        var sD = Date.parse(this.startDate);
        var eD = Date.parse(val);
        if (sD > eD || val == "") {
            console.log("Not valid\n");
            this.endDate = this.startDate;
        }
        else {
            console.log("Valid\n");
            this.endDate = val;
        }
        //  this.showStatus();
    };
    //compare button click handler
    FormComponent.prototype.compClicked = function () {
        if (this.compMode == false) {
            this.compMode = true;
        }
        else {
            this.compMode = false;
        }
        this.onCompClicked.emit(this.compMode);
        //console.log("Emitting " + this.compMode);
    };
    //submit button click handler
    FormComponent.prototype.submitClicked = function () {
        this.submitted = true;
        if (this.compMode != true) {
            //submit in regular mode
            if (this.isValid == true) {
                this.getResults({ city: this.selectedCity, start: this.startDate, end: this.endDate });
            }
            else {
                console.log("Can't submit.");
            }
        }
        else {
            //submit in compare mode
            var formArray = [];
            formArray.push({ city: this.compCity1, start: this.compDate1, end: this.compDate1 });
            formArray.push({ city: this.compCity2, start: this.compDate2, end: this.compDate2 });
            this.getComparison(formArray);
        }
    };
    //manage city button click handler
    FormComponent.prototype.managedClicked = function () {
        if (this.pollMode == false) {
            this.pollMode = true;
        }
        else {
            this.pollMode = false;
        }
    };
    //delete was clicked besides whatever city
    FormComponent.prototype.deleteClicked = function (input) {
        this.delCity(input.id);
    };
    //mostly for debugging
    FormComponent.prototype.showStatus = function () {
        //console.log(this.selectedCity);
        for (var i = 0; i < this.startDate.length; i++) {
            console.log("Start[" + i + "]: " + this.startDate[i] + " End[" + i + "]: " + this.endDate[i] + "\n");
        }
    };
    //when city is changed in dropdown menu
    FormComponent.prototype.changeCity = function (val) {
        this.selectedCity = val;
        this.onCityChange.emit(this.selectedCity);
    };
    //====================================================================================
    //DATA RETRIEVAL FUNCTIONS
    //====================================================================================
    //emits submit event to parent app component
    FormComponent.prototype.getResults = function (data) {
        //console.log(data);
        this.onSubmitted.emit(data);
    };
    //emits compareclicked event to parent app component
    FormComponent.prototype.getComparison = function (data) {
        //console.log(data);
        this.onCompared.emit(data);
    };
    //add city to active ones
    FormComponent.prototype.addCity = function (val1, val2) {
        var form = { id: 0, name: val1, countryCode: val2, active: "Y" };
        this.cityService.addCity(form);
        this.cities.push(form);
        //this.cityService.addCity(input).then(dt => console.log(dt));
    };
    //remove city as active
    FormComponent.prototype.delCity = function (val) {
        this.cityService.deleteCity(val);
        for (var i = 0; i < this.cities.length; i++) {
            if (this.cities[i].id == val) {
                this.cities.splice(i, 1);
            }
        }
        // this.cityService.deleteCity(val).subscribe(dt => console.log(dt));
    };
    //calls city service to get all active cities
    FormComponent.prototype.retrievePolledCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (dt) { return _this.myCallBack(dt); });
    };
    //sets the comparison data
    FormComponent.prototype.comparisonData = function (c1, c2, d1, d2) {
        this.compCity1 = c1;
        this.compCity2 = c2;
        this.compDate1 = d1;
        this.compDate2 = d2;
    };
    //callback function for retrievePolledCities()
    //adds all retrieved cities to local array
    FormComponent.prototype.myCallBack = function (input) {
        for (var i = 0; i < input.length; i++) {
            console.log(input[i]);
            this.cities.push(input[i]);
        }
        this.changeCity(this.cities[0].name);
        this.comparisonData(this.cities[0].name, this.cities[0].name, this.compDate1, this.compDate2);
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "onSubmitted", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "onCompared", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "onCityChange", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "onCompClicked", void 0);
    FormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-form',
            templateUrl: 'form.component.html'
        }), 
        __metadata('design:paramtypes', [city_service_1.CityService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map