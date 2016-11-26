/**
 * Created by pwluft on 2016-11-14.
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
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/forkJoin');
var ChartService = (function () {
    function ChartService(http) {
        this.http = http;
        this.baseUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/Weatherfile/";
    }
    ChartService.prototype.getChartData = function (data) {
        //data should be an array[] of request data
        // Observable.forkJoin(this.http.get('/app/books.json').map((res:Response) => res.json())
        var sDate1 = data[0].start;
        var eDate1 = data[0].end;
        var sDate2 = data[1].start;
        var eDate2 = data[1].end;
        var url1;
        var url2;
        if (sDate1 == eDate1) {
            url1 = this.baseUrl + "getByDate?date=" + sDate1;
        }
        else {
            url1 = this.baseUrl + "getBetween?date1=" + sDate1 + "&date2=" + eDate1;
        }
        if (sDate2 == eDate2) {
            url2 = this.baseUrl + "getByDate?date=" + sDate2;
        }
        else {
            url2 = this.baseUrl + "getBetween?date1=" + sDate2 + "&date2=" + eDate2;
        }
        console.log(url1);
        console.log(url2);
        return Observable_1.Observable.forkJoin(this.http.get(url1).map(function (res) { return res.json(); }), this.http.get(url2).map(function (res) { return res.json(); }));
    };
    ChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChartService);
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map