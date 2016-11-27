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
        if(!ComparisonComponent.googleLoaded) {
            ComparisonComponent.googleLoaded = true;
            google.charts.load('current',  {packages: ['corechart', 'line']});
        }
        google.charts.setOnLoadCallback(() => this.loadGraph());
    }

    createBarChart(element:any):any {
        return new google.visualization.LineChart(element);
    }

    createDataTable(array:any[]):any {
        return google.visualization.arrayToDataTable(array);
    }

    loadGraph(){


        this.data = new google.visualization.DataTable();


        this.data.addColumn('number', 'X');
        this.data.addColumn('number', 'seriesA');
       // this.data.addColumn('number', 'seriesB');



        this.options = {

            legend: 'none',

            backgroundColor: '#151517',
            legendTextStyle: { color: 'white' },
            titleTextStyle: { color: 'white' },

            title: 'Cities and Weather',
            chartArea: {width: '70%', height: '80%'},
            hAxis: {
                gridLines: {count: 0},
                textStyle:{color: 'white'},
                color: 'white'
            },
            vAxis: {
                textStyle:{color: '#FFFFFF'},
                title: 'Temperature'
            }
        };

    }


    getChart(input): void{
        this.chartService.getChartData(input).subscribe(dt => this.myCallBack(dt));
    }





    generateGraph(seriesA, seriesB){

        console.log("Printing series A");

        for(var i = 0; i < seriesA.length; i++){
            this.data.addRows([
                [i + 1, seriesA[i].main.temp]
            ])
        }


        this.chart = this.createBarChart(document.getElementById('my-chart'));
        this.chart.draw(this.data, this.options);


    }




    private myCallBack(input){

        //this is where we do logical stuff with the returned objects
        console.log("multi input callback");

        this.generateGraph(input[0], input[1]);

    }









}