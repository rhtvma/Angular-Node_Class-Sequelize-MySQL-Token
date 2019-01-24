/**
 * Created by rohit on 2019-01-24.
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'uniqueData',
    pure: false
})
export class UniqueDataPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // Remove the duplicate elements
        let uniqueArray = value.filter(function (el, index, array) {
            return array.indexOf(el).project == index;
        });
        return uniqueArray;
    }
}
