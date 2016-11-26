/**
 * Created by pwluft on 2016-11-14.
 */


import {Injectable} from '@angular/core';
import {EntryService} from './entry.service';
import {Entry} from "./entry";


@Injectable()
export class ChartService{


    private plots: any;

    constructor(private entryService: EntryService){

    }


    getChartData(data): any{ //if that return value works i will be FLOORED
        //data should be an array[] of request data

        this.plots = [];

         for(var i = 0; i < data.length; i++){
             //for each requested date range, request an array of entries for it
             this.entryService.getEntries(data[i]).then((dt) => {
                 console.log(dt);
                 console.log("appending");
                 this.plots.push(dt);
             });
         }

         console.log("done");



    }







}