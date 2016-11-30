/**
 * Created by pwluft on 2016-09-27.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';


import {FormComponent} from './form.component';
import { AppComponent } from './app.component';
import {ResultsComponent} from "./results.component";
import {ComparisonComponent} from "./comparison.component";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent, FormComponent, ResultsComponent, ComparisonComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}