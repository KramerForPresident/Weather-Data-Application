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
        this.data = new google.visualization.DataTable();
        this.data.addColumn('string', 'Category');
        this.data.addColumn('number', 'First');
        this.data.addColumn('number', 'Second');
        this.view = new google.visualization.DataView(this.data);
        this.view.setColumns([0, 1,
            { calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation" },
            2,
            { calc: "stringify",
                sourceColumn: 2,
                type: "string",
                role: "annotation" },
        ]);
        this.options = {
            legend: 'none',
            backgroundColor: '#151517',
            legendTextStyle: { color: 'white' },
            titleTextStyle: { color: 'white' },
            title: 'Cities and Weather',
            bars: 'horizontal',
            chartArea: { width: '70%', height: '80%' },
            hAxis: {
                gridLines: { count: 0 },
                textStyle: { color: 'white' },
                color: 'white'
            },
            vAxis: {
                textStyle: { color: '#FFFFFF' },
            }
        };
    };
    ComparisonComponent.prototype.getChart = function (input) {
        var _this = this;
        this.cityA = input[0].city;
        this.cityB = input[1].city;
        this.chartService.getChartData(input).subscribe(function (dt) { return _this.myCallBack(dt); });
    };
    ComparisonComponent.prototype.generateGraph = function (weather1, weather2) {
        console.log(weather1);
        console.log(weather2);
        this.data.addRows([
            ['Temperature', weather1.main.temp, weather2.main.temp],
            ['Pressure', weather1.main.pressure, weather2.main.pressure],
            ['Humidity', weather1.main.humidity, weather2.main.humidity],
            ['Wind', weather1.wind.speed, weather2.wind.speed]
        ]);
        this.chart = this.createBarChart(document.getElementById('my-chart'));
        this.chart.draw(this.view, this.options);
    };
    ComparisonComponent.prototype.myCallBack = function (input) {
        //this is where we do logical stuff with the returned objects
        //format the response data to fit an object of both
        var c1 = "" + this.cityA;
        var c2 = "" + this.cityB;
        var entry1 = input[0].filter(function (obj) {
            return obj.city.name == c1;
        })[0];
        var entry2 = input[1].filter(function (obj) {
            return obj.city.name == c2;
        })[0];
        this.generateGraph(entry1, entry2);
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