/**
 * Created by pwluft on 2016-11-14.
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
var ChartService = (function () {
    function ChartService(entryService) {
        this.entryService = entryService;
    }
    ChartService.prototype.getChartData = function (data) {
        //data should be an array[] of request data
        var plots;
        console.log(data.val);
        // for(var i = 0; i < data.length; i++){
        //     //for each requested date range, request an array of entries for it
        //     this.entryService.getEntries(data[i]).then(entries => plots.push(entries));
        // }
        //so now, plots[] should be an array of entries[] arrays.
        plots = "i saw water";
        //TODO: needs to return some number of plots
        return Promise.resolve(plots);
    };
    ChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], ChartService);
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map