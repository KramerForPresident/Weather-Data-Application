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

    entries: Entry[];


    constructor(private entryService: EntryService) {
    }


    getEntries(): void{
        this.entryService.getEntries().then(entries => this.entries = entries);
    }


}