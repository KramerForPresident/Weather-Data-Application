/**
 * Created by pwluft on 2016-11-01.
 */
/**
 * Created by pwluft on 2016-10-17.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var chart_component_1 = require('./chart.component');
var ComparisonComponent = (function (_super) {
    __extends(ComparisonComponent, _super);
    function ComparisonComponent() {
        _super.apply(this, arguments);
    }
    ComparisonComponent.prototype.drawGraph = function () {
        console.log("graph loaded, drawing....");
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
        //
    };
    ComparisonComponent.prototype.getChart = function (input) {
        //var plots;
        // plots = this.chartService.getChartData(input);
        this.chart = this.createBarChart(document.getElementById('chart'));
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
        __metadata('design:paramtypes', [])
    ], ComparisonComponent);
    return ComparisonComponent;
}(chart_component_1.GoogleChartComponent));
exports.ComparisonComponent = ComparisonComponent;
//# sourceMappingURL=comparison.component.js.map