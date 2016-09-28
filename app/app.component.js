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
        this.title = "LUNA Weatherbox";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getEntries();
    };
    AppComponent.prototype.onSubmit = function () {
        console.log("Date and City submitted");
    };
    AppComponent.prototype.onSelect = function (entry) {
        console.log("Firing....");
        this.selectedEntry = entry;
        console.log(this.selectedEntry);
    };
    AppComponent.prototype.getEntries = function () {
        var _this = this;
        this.entryService.getEntries().then(function (entries) { return _this.entries = entries; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .weatherData {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .weatherData li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .weatherData li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .weatherData li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .weatherData .text {\n    position: relative;\n    top: -3px;\n  }\n  .weatherData .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            template: "\n        <h1>{{title}}</h1>\n        \n        <select>\n            <option>Thunder Bay</option>\n            <option>Toronto</option>\n            <option>Hamilton</option>\n            <option>London</option>\n            <option>Ottawa</option>\n            <option>Barrie</option>\n        </select>\n        <div>\n        <input type=\"date\" name=\"bday\">\n        </div>\n        \n        <div (click)=\"onSubmit()\">Search Weather</div>\n        \n        ",
            providers: [entry_service_1.EntryService]
        }), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map