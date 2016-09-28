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
var entry_1 = require('./entry');
var EntryDetailComponent = (function () {
    function EntryDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', entry_1.Entry)
    ], EntryDetailComponent.prototype, "input", void 0);
    EntryDetailComponent = __decorate([
        core_1.Component({
            selector: 'entry-detail',
            template: "\n        <div *ngIf=\"input\">\n            <h2>{{input.city}} details!</h2>\n            <div><label>id: </label>{{input.city}}</div>\n            <div>\n            <label>name: </label>\n                <input [(ngModel)]=\"input.city\" placeholder=\"name\"/>\n            </div> \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EntryDetailComponent);
    return EntryDetailComponent;
}());
exports.EntryDetailComponent = EntryDetailComponent;
//# sourceMappingURL=entry-detail.component.js.map