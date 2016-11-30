/**
 * Created by pwluft on 2016-11-01.
 */
/**
 * Created by pwluft on 2016-10-17.
 */

import { Component, Input, OnInit} from '@angular/core';
import {ChartService} from './chart.service';
declare var google:any;

@Component({
    moduleId: module.id,
    selector: 'comparison-box',
    templateUrl: 'comparison.component.html'
})

export class ComparisonComponent implements OnInit{

    private options;
    private view;
    private data;
    private chart;
    private static googleLoaded:any;

    @Input() compMode: boolean;

    cityA;
    cityB;

    constructor(private chartService: ChartService){}


    getGoogle() {
        return google;
    }
    ngOnInit() {
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

    //upon intialization of component, set up some options
    loadGraph(){
        this.options = {

            legend: 'none',

            backgroundColor: '#151517',
            legendTextStyle: { color: 'white' },
            titleTextStyle: { color: 'white' },

            bars: 'horizontal',
            chartArea: {width: '70%', height: '80%'},
            hAxis: {
                gridLines: {count: 0},
                textStyle:{color: 'white'},
                color: 'white'
            },
            vAxis: {
                textStyle:{color: '#FFFFFF'},
            }
        };

    }

    //this gets called from parent component, passing the two dataset parameters
    getChart(input): void{

        this.cityA = input[0].city;
        this.cityB = input[1].city;

        //invoke chart service from backend
        this.chartService.getChartData(input).subscribe(dt => this.myCallBack(dt));
    }


    //receiving two weather file objects, draw the graph
    generateGraph(weather1, weather2){

        // console.log(weather1);
        // console.log(weather2);

        //create new data table
        this.data = new google.visualization.DataTable();
        this.data.addColumn('string', 'Category');
        this.data.addColumn('number', weather1.city.name);
        this.data.addColumn('number', weather2.city.name);

        //configure graph view and visuals
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


        //add the object data to the graph
        this.data.addRows([
            ['Temperature', weather1.main.temp, weather2.main.temp],
            ['Pressure', weather1.main.pressure, weather2.main.pressure],
            ['Humidity', weather1.main.humidity, weather2.main.humidity],
            ['Wind', weather1.wind.speed, weather2.wind.speed]
        ])

        //lastly just draw it
        this.chart = this.createBarChart(document.getElementById('my-chart'));
        this.chart.draw(this.view, this.options);
    }


    private myCallBack(input){

        //this is where we do logical stuff with the returned objects
        //format the response data to fit an object of both

        //get parameter city names
        var c1 = "" + this.cityA;
        var c2 = "" + this.cityB;

        //filter the weather files returned via parameter city name
        var entry1 = input[0].filter(function(obj){
            return obj.city.name == c1;
        })[0];
        var entry2 = input[1].filter(function(obj){
            return obj.city.name == c2;
        })[0];


        //if an undefined object was returned, simply pass an empty object to graph (janky)
        if(entry1 == undefined){
            entry1 = this.emptyObject(c1);
        }
        if(entry2 == undefined){
            entry2 = this.emptyObject(c2);
        }


        //finally, pass both weather objects to graph drawer
        this.generateGraph(entry1, entry2);


    }


    //returns empty object
    emptyObject(inputName){

        var ob = {
            city:{
                name: inputName
            },
            main:{
                temp: 0,
                humidity: 0,
                pressure: 0
            },
            weather:{
                main: "",
                description: ""
            },
            wind:{
                speed: 0
            }
        }

        return ob;
    }

}