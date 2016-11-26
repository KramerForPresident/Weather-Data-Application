/**
 * Created by pwluft on 2016-11-01.
 */
/**
 * Created by pwluft on 2016-10-17.
 */

import { Component, Input, OnInit} from '@angular/core';

import {ChartService} from './chart.service';
import {EntryService} from './entry.service';


declare var google:any;



@Component({
    moduleId: module.id,
    selector: 'comparison-box',
    templateUrl: 'comparison.component.html'
})

export class ComparisonComponent implements OnInit{

    private options;
    private seriesA: any;
    private seriesB: any;
    private chartData;
    private data;
    private chart;
    private static googleLoaded:any;

    @Input() compMode: boolean;


    constructor(private chartService: ChartService){}


    getGoogle() {
        return google;
    }
    ngOnInit() {
        console.log('ngOnInit');
        if(!ComparisonComponent.googleLoaded) {
            ComparisonComponent.googleLoaded = true;
            google.charts.load('current',  {packages: ['corechart', 'bar']});
        }
        google.charts.setOnLoadCallback(() => this.loadGraph());
    }


    createBarChart(element:any):any {
        return new google.visualization.BarChart(element);
    }

    createDataTable(array:any[]):any {
        return google.visualization.arrayToDataTable(array);
    }

    loadGraph(){

        console.log("loading graph data...");
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

    }


    getChart(input): void{

        this.chartService.getChartData(input).subscribe(dt => this.myCallBack(dt));

    }




    private myCallBack(data){
        console.log("this gets called once we retrieve chart data");
        console.log(data);

        console.log("changing data, drawing chart");
        this.chart = this.createBarChart(document.getElementById('my-chart'));
        this.chart.draw(this.data, this.options);
    }






}