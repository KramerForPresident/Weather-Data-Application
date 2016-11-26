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
var FormComponent = (function () {
    function FormComponent() {
        //TODO: get these from a service... via polled cities
        this.cities = ['Thunder Bay', 'Toronto', 'Barrie', "Phoenix"];
        //okay very bad code starting in 3-2-1 GO
        this.startDate = ["2016-11-25", "2016-11-26"];
        this.endDate = ["2016-11-25", "2016-11-26"];
        this.submitted = false;
        this.selectedCity = this.cities[0];
        //if this works then holy moly
        //startDate = "2016-08-30";
        //endDate = "2016-08-31";
        this.compMode = false;
        this.isValid = true;
        this.onSubmitted = new core_3.EventEmitter();
        this.onCompared = new core_3.EventEmitter();
        this.onCityChange = new core_3.EventEmitter();
        this.onCompClicked = new core_3.EventEmitter();
    }
    FormComponent.prototype.changeStart = function (val, index) {
        var sD = Date.parse(val);
        var eD = Date.parse(this.endDate[index]);
        if (sD > eD || val == "") {
            console.log("Not valid\n");
            this.startDate[index] = this.endDate[index];
        }
        else {
            console.log("Valid\n");
            this.startDate[index] = val;
        }
        // this.showStatus();
    };
    FormComponent.prototype.changeEnd = function (val, index) {
        var sD = Date.parse(this.startDate[index]);
        var eD = Date.parse(val);
        if (sD > eD || val == "") {
            console.log("Not valid\n");
            this.endDate[index] = this.startDate[index];
        }
        else {
            console.log("Valid\n");
            this.endDate[index] = val;
        }
        //  this.showStatus();
    };
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
    FormComponent.prototype.submitClicked = function () {
        this.submitted = true;
        if (this.compMode != true) {
            if (this.isValid == true) {
                this.getResults({ city: this.selectedCity, start: this.startDate[0], end: this.endDate[0] });
            }
            else {
                console.log("Can't submit.");
            }
        }
        else {
            var formArray = [];
            for (var i = 0; i < this.startDate.length; i++) {
                formArray.push({ city: this.selectedCity, start: this.startDate[i], end: this.endDate[i] });
            }
            this.getComparison(formArray);
        }
    };
    //mostly for debugging
    FormComponent.prototype.showStatus = function () {
        //console.log(this.selectedCity);
        for (var i = 0; i < this.startDate.length; i++) {
            console.log("Start[" + i + "]: " + this.startDate[i] + " End[" + i + "]: " + this.endDate[i] + "\n");
        }
    };
    FormComponent.prototype.changeCity = function (val) {
        this.selectedCity = val;
        this.onCityChange.emit(this.selectedCity);
    };
    //these two functions might be redundant. whatever.
    FormComponent.prototype.getResults = function (data) {
        //console.log(data);
        this.onSubmitted.emit(data);
    };
    FormComponent.prototype.getComparison = function (data) {
        //console.log(data);
        this.onCompared.emit(data);
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
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map