/**
 * Created by pwluft on 2016-10-17.
 */

import { Component, Input} from '@angular/core';
import {Entry} from './entry';

import {EntryService} from './entry.service';

import {OnInit} from '@angular/core';


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

    currentCity = "Thunder Bay";



    constructor(private entryService: EntryService){
    }

    getEntries(input): void{

        this.entryService.getEntries(input).then(dt => this.dataReceived(dt));

        this.isEmpty = false;
    }


    changeCity(input){
        this.currentCity = input;
    }

    private dataReceived(input){
        this.entries = input;


        for(var i = 0; i < this.entries.length; i ++){
            console.log(this.entries[i]);
        }

    }



}