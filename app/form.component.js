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
        //TODO: get these from a service
        this.cities = ['Thunder Bay', 'Toronto', 'Barrie', "Phoenix"];
        this.submitted = false;
        this.selectedCity = this.cities[0];
        this.startDate = "2016-08-30";
        this.endDate = "2016-08-31";
        this.compMode = false;
        this.isValid = true;
        this.onSubmitted = new core_3.EventEmitter();
        this.onCompClicked = new core_3.EventEmitter();
    }
    //bindings don't update upon changing date for some reason
    //this does technically validate them though
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
        //  this.showStatus();
    };
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
        //this.showStatus();
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
        if (this.isValid == true) {
            this.getService(this.selectedCity, this.startDate, this.endDate);
        }
        else {
            console.log("Can't submit.");
        }
    };
    //mostly for debugging
    FormComponent.prototype.showStatus = function () {
        //console.log(this.selectedCity);
        console.log("Start:\t" + this.startDate + "\nEnd:\t" + this.endDate);
    };
    FormComponent.prototype.changeCity = function (val) {
        this.selectedCity = val;
    };
    FormComponent.prototype.getService = function (city, start, end) {
        console.log("Sending to service...");
        this.onSubmitted.emit({ "city": city, "start": start, "end": end });
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "onSubmitted", void 0);
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