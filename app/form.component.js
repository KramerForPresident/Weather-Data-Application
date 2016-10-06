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
var FormComponent = (function () {
    function FormComponent() {
        //TODO: get these from a service
        this.cities = ['Thunder Bay', 'Toronto', 'Barrie'];
        this.submitted = false;
        this.selectedCity = this.cities[0];
        this.selectedDate = 2012 - 10 - 09;
    }
    FormComponent.prototype.changeDate = function (val) {
        console.log("Date changed");
        this.selectedDate = val;
    };
    FormComponent.prototype.changeCity = function (val) {
        console.log("City changed");
        this.selectedCity = val;
    };
    FormComponent.prototype.onSubmit = function () {
        console.log(this.selectedCity);
        console.log(this.selectedDate);
        this.submitted = true;
    };
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