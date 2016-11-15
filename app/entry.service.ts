/**
 * Created by pwluft on 2016-09-27.
 */

import { Injectable } from '@angular/core';

import {Entry} from './entry';

@Injectable()
export class EntryService{



    getEntries(data): Promise<Entry[]>{
        console.log("Getting your entries");
        //console.log(data.city + "\n" + data.start + "\n" + data.end);


        var samples = [];

        //TODO: access entries from REST endpoint
        //service will return data from backend

        var ind = Math.floor(Math.random()*20 + 1);


        //a temp random object generator
        for(var i = 1; i <= ind; i++){
            samples.push()
            samples.push(
                new Entry(10+i, data.city, Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1))
            );
        }

        return Promise.resolve(samples);
    }
}