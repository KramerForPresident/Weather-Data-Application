/**
 * Created by pwluft on 2016-11-26.
 */


import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class CityService{
    constructor(private http: Http){}

    //strings of base urls
    private getUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/polled";
    private addUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/add?"
    private delUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/"

    //get polled cities
    getCities(): any{
        //returns http promise
        return this.http.get(this.getUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    addCity(input): any{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //construct url
        var url = this.addUrl + "name=" +  input.name + "&countrycode=" + input.countryCode;
        console.log(url);

        // return this.http.post(url, {}, options)
        //     .toPromise()
        //     .then(response => response.json())
        //     .catch(this.handleError);
    }

    deleteCity(input): any{
        //construct url
        var url = this.delUrl + input;
        console.log(url);

        // return this.http.delete(url) // ...using put request
        //     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}