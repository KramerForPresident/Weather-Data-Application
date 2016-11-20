/**
 * Created by pwluft on 2016-11-01.
 */
/**
 * Created by pwluft on 2016-10-17.
 */

import { Component, Input} from '@angular/core';

import {ChartService} from './chart.service';


import {GoogleChartComponent} from './chart.component';




@Component({
    moduleId: module.id,
    selector: 'comparison-box',
    templateUrl: 'comparison.component.html'
})

export class ComparisonComponent extends GoogleChartComponent{

    private options;
    private data;
    private chart;


    drawGraph(){

        console.log("graph loaded, drawing....");

        this.data = this.createDataTable([
            ['City', 'High', 'Low'],
            ['A', 88, 27],
            ['B', 90, 20],
            ['C', 70, 22]
        ]);


        this.options = {

            title: 'Cities and Weather',
            chartArea: {width: '50%'},
            hAxis: {
                title: 'High'
            },
            vAxis: {
                title: 'City'
            }
        };
        //


    }

    @Input() compMode: boolean;


    getChart(input): void{
        //var plots;

       // plots = this.chartService.getChartData(input);


        this.chart = this.createBarChart(document.getElementById('chart'));
        this.chart.draw(this.data, this.options);





    }


}