/**
 * Created by pwluft on 2016-11-26.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var CityService = (function () {
    function CityService(http) {
        this.http = http;
        //strings of base urls
        this.getUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/polled";
        this.addUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/add?";
        this.delUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/";
    }
    //get polled cities
    CityService.prototype.getCities = function () {
        //returns http promise
        return this.http.get(this.getUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CityService.prototype.addCity = function (input) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        //construct url
        var url = this.addUrl + "name=" + input.name + "&countrycode=" + input.countryCode;
        console.log(url);
        // return this.http.post(url, {}, options)
        //     .toPromise()
        //     .then(response => response.json())
        //     .catch(this.handleError);
    };
    CityService.prototype.deleteCity = function (input) {
        //construct url
        var url = this.delUrl + input;
        console.log(url);
        // return this.http.delete(url) // ...using put request
        //     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
    CityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CityService);
    return CityService;
}());
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map