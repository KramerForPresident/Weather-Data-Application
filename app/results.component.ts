/**
 * Created by pwluft on 2016-10-17.
 */

import { Component, Input} from '@angular/core';
import {EntryService} from './entry.service';

@Component({
    moduleId: module.id,
    selector: 'results-box',
    templateUrl: 'results.component.html'
})

export class ResultsComponent{

    @Input() compMode: boolean;
    entries: any;
    a = {};
    isEmpty = true;
    currentCity;


    constructor(private entryService: EntryService){
    }

    //gets called from parent app component
    //passes form parameters to entryservice
    getEntries(input): void{
        this.entryService.getEntries(input).then(dt => this.myCallBack(dt));
        this.isEmpty = false;
    }


    //sets selected city to passed value
    changeCity(input){
        this.currentCity = input;
    }


    //prints out all weather objects. debugging mostly
    printWeatherFiles(array){
        for(var i = 0; i < array.length; i++){
            console.log(array[i]);
        }
    }

    //callback for when the http get request is made
    private myCallBack(input){
        this.entries = input;
        this.printWeatherFiles(this.entries);
    }
}