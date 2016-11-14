/**
 * Created by pwluft on 2016-09-27.
 */

import { Injectable } from '@angular/core';

import {Entry} from './entry';

@Injectable()
export class EntryService{



    getEntries(): Promise<Entry[]>{
        console.log("Getting your entries");

        var samples = [];

        //TODO: access entries from REST endpoint
        //service will return data from backend

        var ind = Math.floor(Math.random()*10 + 1);

        for(var i = 1; i <= ind; i++){
            samples.push()
            samples.push(
                new Entry(10+i, "Welpville", Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1))
            );
        }

        return Promise.resolve(samples);
    }
}