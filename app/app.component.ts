/**
 * Created by pwluft on 2016-09-27.
 */

import {Component} from '@angular/core'
import {Entry} from './entry';
import {EntryDetailComponent} from './entry-detail.component';
import {EntryService} from './entry.service';
import {OnInit} from '@angular/core';
import {FormComponent} from './form.component';
import {ChartService} from "./chart.service";

import 'rxjs/add/operator/map';



@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    providers: [EntryService, ChartService]
})

export class AppComponent {
    title = "LUNA WEATHERBOX";
    selectedEntry: Entry;
    isComparison: boolean = false;


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


    modeChange(input):void{
        this.isComparison = input;
    }


}

