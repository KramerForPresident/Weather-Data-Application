/**
 * Created by pwluft on 2016-11-01.
 */
/**
 * Created by pwluft on 2016-10-17.
 */

import { Component, Input} from '@angular/core';

import {ChartService} from './chart.service';

import {OnInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'comparison-box',
    templateUrl: 'comparison.component.html'
})

export class ComparisonComponent{


    plots = [];

    @Input() compMode: boolean;

    constructor(private chartService: ChartService){
    }

    getChart(input): void{
        this.plots = this.chartService.getChartData(input);
        console.log(this.plots);
    }


}