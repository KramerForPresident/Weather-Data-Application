/**
 * Created by pwluft on 2016-11-26.
 */


import { Injectable } from '@angular/core';
import {Entry} from './entry';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class CityService{

    constructor(private http: Http){}

    private url = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/polled";


    getCities(): any{

        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}