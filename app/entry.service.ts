/**
 * Created by pwluft on 2016-09-27.
 */

import { Injectable } from '@angular/core';

import {Entry} from './entry';

@Injectable()
export class EntryService{



    getEntries(data): Promise<Entry[]>{
        console.log("Getting your entries");

        var samples = [];
        var city = data.city;
        var sDate = data.start;
        var eDate = data.end;


        //TODO: access entries from REST endpoint. use city, sDate, and eDate as parameters
        //service will return data from backend

        //a temp random object generator. it'll suffice till we start using an endpoint
        var ind = Math.floor(Math.random()*20 + 1);
        for(var i = 1; i <= ind; i++){
            samples.push()
            samples.push(
                new Entry(10+i, data.city, Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1))
            );
        }

        return Promise.resolve(samples);
    }
}