/**
 * Created by pwluft on 2016-09-27.
 */

import { Injectable } from '@angular/core';

import {Entry} from './entry';

import {SAMPLES} from './mock-entries';

@Injectable()
export class EntryService{
    getEntries(): Promise<Entry[]> {
        return Promise.resolve(SAMPLES);
    }
}
