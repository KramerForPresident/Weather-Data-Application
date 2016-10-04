/**
 * Created by pwluft on 2016-09-29.
 */

import { Component } from '@angular/core';
import { Entry} from './entry';

@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'form.component.html'
})


export class FormComponent{

    cities = ['Thunder Bay', 'Toronto', 'Barrie'];


}
