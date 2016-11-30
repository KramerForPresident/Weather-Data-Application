/**
 * Created by pwluft on 2016-11-14.
 */


import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class ChartService{

    constructor(private http: Http){}
    private baseUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/Weatherfile/";


    getChartData(data): any{

        //extract parameter data from object
        var sDate1 = data[0].start;
        var eDate1 = data[0].end;
        var sDate2 = data[1].start;
        var eDate2 = data[1].end;
        var url1;
        var url2;

        //technically there's 2 different URL requests. just figure out which URL to construct
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

        //call a fork join: simultaneously calls multiple HTTP requests at once
        //after this, an array of data is returned by the multiple requests
        return Observable.forkJoin(
            this.http.get(url1).map((res:Response) => res.json()),
            this.http.get(url2).map((res:Response) => res.json())
        );

    }
}