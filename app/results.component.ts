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

    errorMessage: string;
    entries: any;

    a = {};

    isEmpty = true;



    constructor(private entryService: EntryService){
    }

    getEntries(input): void{

        this.entryService.getEntries(input).then(dt => this.dataReceived(dt));

        this.isEmpty = false;
    }


    private dataReceived(dt){
        console.log("Received the data and got us some dollars");
        console.log(dt);
    }



}