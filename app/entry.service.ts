/**
 * Created by pwluft on 2016-09-27.
 */

import { Injectable } from '@angular/core';
import {Entry} from './entry';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class EntryService{

    constructor(private http: Http ){}

    //base url string
    private baseUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/Weatherfile/";

    //function to get weather files based on parameter date range
    getEntries(data): Promise<Entry[]>{
        var sDate = data.start;
        var eDate = data.end;
        var url;

        //two different urls can be called, depending on date range. here we decide which one
        if(sDate == eDate){
            url = this.baseUrl + "getByDate?date=" + sDate;
        }
        else{
            url = this.baseUrl + "getBetween?date1=" + sDate + "&date2=" + eDate;
        }

        console.log(url);

        //return http request in promise
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Entry[])
            .catch(this.handleError);

    }

    //error handler
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}