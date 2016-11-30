/**
 * Created by pwluft on 2016-10-17.
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
var entry_service_1 = require('./entry.service');
var ResultsComponent = (function () {
    function ResultsComponent(entryService) {
        this.entryService = entryService;
        this.a = {};
        this.isEmpty = true;
    }
    //gets called from parent app component
    //passes form parameters to entryservice
    ResultsComponent.prototype.getEntries = function (input) {
        var _this = this;
        this.entryService.getEntries(input).then(function (dt) { return _this.myCallBack(dt); });
        this.isEmpty = false;
    };
    //sets selected city to passed value
    ResultsComponent.prototype.changeCity = function (input) {
        this.currentCity = input;
    };
    //prints out all weather objects. debugging mostly
    ResultsComponent.prototype.printWeatherFiles = function (array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    };
    //callback for when the http get request is made
    ResultsComponent.prototype.myCallBack = function (input) {
        this.entries = input;
        this.printWeatherFiles(this.entries);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ResultsComponent.prototype, "compMode", void 0);
    ResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'results-box',
            templateUrl: 'results.component.html'
        }), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map