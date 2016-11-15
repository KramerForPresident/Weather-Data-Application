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



    @Input() compMode: boolean;

    constructor(private chartService: ChartService){

    }




    getChart(input): void{

        var plots;

        console.log("Well at least we reached here");

        this.chartService.getChartData(input).then((sets) => plots = sets);
        console.log("wow that didn't crash, congrats");
    }


}