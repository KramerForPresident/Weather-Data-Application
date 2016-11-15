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


    getChartData(data): Promise <Entry[][]>{ //if that return value works i will be FLOORED

        //data should be an array[] of request data

        var plots = [];


        var data = [];
        data.push({city: "Bradford", start: "11-11-2011", end: "11-11-2012"});
        data.push({city: "Winnipeg", start: "13-14-1999", end: "11-11-2000"});
        data.push({city: "Arizona", start: "09-09-2002", end: "07-07-2004"});


        for(var i = 0; i < data.length; i++){
            //for each requested date range, request an array of entries for it
            this.entryService.getEntries(data[i]).then(entries => plots.push(entries));
        }

        //so now, plots[] should be an array of entries[] arrays.

        //TODO: needs to return some number of plots
        return Promise.resolve(plots);
    }







}