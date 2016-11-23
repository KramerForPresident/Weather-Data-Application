/**
 * Created by pwluft on 2016-09-27.
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
var EntryService = (function () {
    function EntryService(http) {
        this.http = http;
        this.url = 'http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/weatherfile/getTest';
    }
    EntryService.prototype.getEntries = function (data) {
        var samples = [];
        var city = data.city;
        var sDate = data.start;
        var eDate = data.end;
        //console.log("Sending request for: " + city + " " + sDate + " " + eDate);
        //
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json(); })
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
    };
    EntryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    EntryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EntryService);
    return EntryService;
}());
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map