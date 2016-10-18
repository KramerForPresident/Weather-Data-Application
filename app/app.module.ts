/**
 * Created by pwluft on 2016-09-27.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {FormComponent} from './form.component';
import { AppComponent } from './app.component';
import {EntryDetailComponent} from "./entry-detail.component";
import {ResultsComponent} from "./results.component";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EntryDetailComponent, FormComponent, ResultsComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}