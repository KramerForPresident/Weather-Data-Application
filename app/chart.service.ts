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


    getChartData(data): any{ //if that return value works i will be FLOORED

        //data should be an array[] of request data

        var plots = [];

        //d is a temp variable
        var d = [];
        d.push({city: "Bradford", start: "11-11-2011", end: "11-11-2012"});
        d.push({city: "Winnipeg", start: "13-14-1999", end: "11-11-2000"});
        d.push({city: "Arizona", start: "09-09-2002", end: "07-07-2004"});

        for(var i = 0; i < d.length; i++){
            //for each requested date range, request an array of entries for it
            this.entryService.getEntries(d[i]).then(entries => plots.push(entries));
        }

        //so now, plots[] should be an array of entries[] arrays.

        //TODO: needs to return some number of plots

        return plots;
    }







}