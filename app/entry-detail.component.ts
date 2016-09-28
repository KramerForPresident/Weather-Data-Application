/**
 * Created by pwluft on 2016-09-27.
 */

import { Component, Input} from '@angular/core';
import {Entry} from './entry';


@Component({
    selector: 'entry-detail',
    template: `
        <div *ngIf="input">
            <h2>{{input.city}} details!</h2>
            <div><label>id: </label>{{input.city}}</div>
            <div>
            <label>name: </label>
                <input [(ngModel)]="input.city" placeholder="name"/>
            </div> 
        </div>
    `
})

export class EntryDetailComponent{
    @Input()
    input: Entry;
}
