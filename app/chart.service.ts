/**
 * Created by pwluft on 2016-11-14.
 */


import {Injectable} from '@angular/core';
import {EntryService} from './entry.service';
import {Entry} from "./entry";
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';



@Injectable()
export class ChartService{


    private plots: any;
    private seriesA: any;
    private seriesB: any;

    constructor(private http: Http){}

    private baseUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/Weatherfile/";





    getChartData(data): any{ //if that return value works i will be FLOORED
        //data should be an array[] of request data


       // Observable.forkJoin(this.http.get('/app/books.json').map((res:Response) => res.json())

        var sDate1 = data[0].start;
        var eDate1 = data[0].end;
        var sDate2 = data[1].start;
        var eDate2 = data[1].end;
        var url1;
        var url2;

        if(sDate1 == eDate1){
            url1 = this.baseUrl + "getByDate?date=" + sDate1;
        }
        else{
            url1 = this.baseUrl + "getBetween?date1=" + sDate1 + "&date2=" + eDate1;
        }
        if(sDate2 == eDate2){
            url2 = this.baseUrl + "getByDate?date=" + sDate2;
        }
        else{
            url2 = this.baseUrl + "getBetween?date1=" + sDate2 + "&date2=" + eDate2;
        }


        console.log(url1);
        console.log(url2);



        return Observable.forkJoin(
            this.http.get(url1).map((res:Response) => res.json()),
            this.http.get(url2).map((res:Response) => res.json())
        );







    }







}