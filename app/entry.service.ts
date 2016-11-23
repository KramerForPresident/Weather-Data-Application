/**
 * Created by pwluft on 2016-09-27.
 */

import { Injectable } from '@angular/core';

import {Entry} from './entry';

import {Http, Response} from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';



@Injectable()
export class EntryService{

    private url = 'http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/weatherfile/getTest';
    constructor(private http: Http ){}

    getEntries(data): Promise<Entry[]>{
        var samples = [];
        var city = data.city;
        var sDate = data.start;
        var eDate = data.end;
        //console.log("Sending request for: " + city + " " + sDate + " " + eDate);


        //
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Entry[])
            .catch(this.handleError);



        //a temp random object generator. it'll suffice till we start using an endpoint
        // var ind = Math.floor(Math.random()*20 + 1);
        // for(var i = 1; i <= ind; i++){
        //     samples.push()
        //     samples.push(
        //         new Entry(10+i, city, Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1))
        //     );
        // }

        //return Promise.resolve(samples);
        //return samples;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}