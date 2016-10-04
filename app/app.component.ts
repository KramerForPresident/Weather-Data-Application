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
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .weatherData {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .weatherData li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .weatherData li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .weatherData li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .weatherData .text {
    position: relative;
    top: -3px;
  }
  .weatherData .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    template: `
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

