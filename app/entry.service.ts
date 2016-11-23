/**
 * Created by pwluft on 2016-09-27.
 */

import { Injectable } from '@angular/core';

import {Entry} from './entry';

import {Http, Response} from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class EntryService{


    private url = 'http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/weatherfile/getTest';

    constructor(private http: Http ){}


    getEntries(data): Promise<Entry[]>{
    //getEntries(data): any[]{ //as much as i hate to say this, we might have to resort to this....

        var samples = [];
        var city = data.city;
        var sDate = data.start;
        var eDate = data.end;




        //console.log("Sending request for: " + city + " " + sDate + " " + eDate);

        //TODO: access entries from REST endpoint. use city, sDate, and eDate as parameters


        var returnedData = this.http.get(this.url).map(this.extractData);

        console.log(returnedData);
        console.log(this.url);













        //a temp random object generator. it'll suffice till we start using an endpoint
        var ind = Math.floor(Math.random()*20 + 1);
        for(var i = 1; i <= ind; i++){
            samples.push()
            samples.push(
                new Entry(10+i, city, Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1))
            );
        }

        return Promise.resolve(samples);
        //return samples;
    }


    extractData(res: Response){
        console.log("extracting data.....");
        let body = res.json();
        return body.data || {};
    }

}