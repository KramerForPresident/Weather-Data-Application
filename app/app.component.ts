/**
 * Created by pwluft on 2016-09-27.
 */

import {Component} from '@angular/core'
import {Entry} from './entry';
import {EntryDetailComponent} from './entry-detail.component';
import {EntryService} from './entry.service';
import {OnInit} from '@angular/core';
import {FormComponent} from './form.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-form></my-form>
        `,
    providers: [EntryService]
})




export class AppComponent {

    constructor(private entryService: EntryService) {
    }

    title = "LUNA Weatherbox";
    selectedEntry: Entry;
    entries: Entry[];


    optionClicked(): void {
        console.log("The option was clicked");
    }


    onSubmit(): void{
        console.log("Date and City submitted");
    }

    onSelect(entry: Entry): void{
        console.log("Firing....")
        this.selectedEntry = entry;
        console.log(this.selectedEntry);
    }

    getEntries(): void{
        this.entryService.getEntries().then(entries => this.entries = entries);
    }

}

