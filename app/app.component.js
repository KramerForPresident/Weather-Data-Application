/**
 * Created by pwluft on 2016-09-27.
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
var AppComponent = (function () {
    function AppComponent(entryService) {
        this.entryService = entryService;
        this.title = "LUNA WEATHERBOX";
        this.isComparison = false;
    }
    AppComponent.prototype.optionClicked = function () {
        console.log("The option was clicked");
    };
    AppComponent.prototype.onSubmit = function () {
        console.log("Date and City submitted");
    };
    AppComponent.prototype.onSelect = function (entry) {
        console.log("Firing....");
        this.selectedEntry = entry;
        console.log(this.selectedEntry);
    };
    AppComponent.prototype.modeChange = function (input) {
        this.isComparison = input;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.component.html',
            providers: [entry_service_1.EntryService]
        }), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map