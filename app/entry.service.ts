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

    constructor(private http: Http ){}
    private baseUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/Weatherfile/";


    getEntries(data): Promise<Entry[]>{
        var sDate = data.start;
        var eDate = data.end;
        var url;

        //console.log("Sending request for: " + city + " " + sDate + " " + eDate);

        if(sDate == eDate){

            console.log("theyre literally the same");
            url = this.baseUrl + "getByDate?date=" + sDate;
        }
        else{
            url = this.baseUrl + "getBetween?date1=" + sDate + "&date2=" + eDate;
        }

        console.log(url);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Entry[])
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}