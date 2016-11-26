/**
 * Created by pwluft on 2016-11-01.
 */
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
var ComparisonComponent = (function () {
    function ComparisonComponent(entryService) {
        this.entryService = entryService;
    }
    ComparisonComponent.prototype.getGoogle = function () {
        return google;
    };
    ComparisonComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        if (!ComparisonComponent.googleLoaded) {
            ComparisonComponent.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'bar'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.loadGraph(); });
    };
    ComparisonComponent.prototype.createBarChart = function (element) {
        return new google.visualization.BarChart(element);
    };
    ComparisonComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    ComparisonComponent.prototype.loadGraph = function () {
        console.log("loading graph data...");
        this.data = this.createDataTable([
            ['City', 'High', 'Low'],
            ['A', 88, 27],
            ['B', 90, 20],
            ['C', 70, 22]
        ]);
        this.options = {
            title: 'Cities and Weather',
            chartArea: { width: '50%' },
            hAxis: {
                title: 'High'
            },
            vAxis: {
                title: 'City'
            }
        };
    };
    ComparisonComponent.prototype.getChart = function (input) {
        var _this = this;
        this.entryService.getEntries(input[0]).then(function (dt) {
            _this.seriesA = dt;
            console.log("printing series A");
            for (var i = 0; i < _this.seriesA.length; i++) {
                console.log(_this.seriesA[i]);
            }
            console.log("\n");
        });
        this.entryService.getEntries(input[1]).then(function (dt) {
            _this.seriesB = dt;
            console.log("printing series B");
            for (var i = 0; i < _this.seriesA.length; i++) {
                console.log(_this.seriesB[i]);
            }
            console.log("\n");
        });
        console.log("changing data, drawing chart");
        this.chart = this.createBarChart(document.getElementById('my-chart'));
        this.chart.draw(this.data, this.options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ComparisonComponent.prototype, "compMode", void 0);
    ComparisonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comparison-box',
            templateUrl: 'comparison.component.html'
        }), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], ComparisonComponent);
    return ComparisonComponent;
}());
exports.ComparisonComponent = ComparisonComponent;
//# sourceMappingURL=comparison.component.js.map