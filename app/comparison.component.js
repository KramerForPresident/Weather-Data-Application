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
var chart_service_1 = require('./chart.service');
var ComparisonComponent = (function () {
    function ComparisonComponent(chartService) {
        this.chartService = chartService;
    }
    ComparisonComponent.prototype.getGoogle = function () {
        return google;
    };
    ComparisonComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        if (!ComparisonComponent.googleLoaded) {
            ComparisonComponent.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'line'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.loadGraph(); });
    };
    ComparisonComponent.prototype.createBarChart = function (element) {
        return new google.visualization.LineChart(element);
    };
    ComparisonComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    ComparisonComponent.prototype.loadGraph = function () {
        this.data = new google.visualization.DataTable();
        this.data.addColumn('number', 'X');
        this.data.addColumn('number', 'Dogs');
        this.options = {
            title: 'Cities and Weather',
            chartArea: { width: '100%' },
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Temperature'
            }
        };
    };
    ComparisonComponent.prototype.getChart = function (input) {
        var _this = this;
        this.chartService.getChartData(input).subscribe(function (dt) { return _this.myCallBack(dt); });
    };
    ComparisonComponent.prototype.generateGraph = function (seriesA, seriesB) {
        console.log("Printing series A");
        for (var i = 0; i < seriesA.length; i++) {
            console.log(seriesA[i]);
        }
        console.log("Printing series B");
        for (var i = 0; i < seriesB.length; i++) {
            console.log(seriesB[i]);
        }
        this.chart = this.createBarChart(document.getElementById('my-chart'));
        this.chart.draw(this.data, this.options);
    };
    ComparisonComponent.prototype.myCallBack = function (input) {
        //this is where we do logical stuff with the returned objects
        console.log("multi input callback");
        this.generateGraph(input[0], input[1]);
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
        __metadata('design:paramtypes', [chart_service_1.ChartService])
    ], ComparisonComponent);
    return ComparisonComponent;
}());
exports.ComparisonComponent = ComparisonComponent;
//# sourceMappingURL=comparison.component.js.map