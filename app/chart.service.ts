/**
 * Created by pwluft on 2016-11-14.
 */


import {Injectable} from '@angular/core';
import {EntryService} from './entry.service';
import {Entry} from "./entry";


@Injectable()
export class ChartService{

    constructor(private entryService: EntryService){

    }


    getChartData(data): Promise <string>{ //if that return value works i will be FLOORED

        //data should be an array[] of request data

        var plots;

        console.log(data.val);


        // for(var i = 0; i < data.length; i++){
        //     //for each requested date range, request an array of entries for it
        //     this.entryService.getEntries(data[i]).then(entries => plots.push(entries));
        // }

        //so now, plots[] should be an array of entries[] arrays.

        plots = "i saw water";

        //TODO: needs to return some number of plots
        return Promise.resolve(plots);
    }






}