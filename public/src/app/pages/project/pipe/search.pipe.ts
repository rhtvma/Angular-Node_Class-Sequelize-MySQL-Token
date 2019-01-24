import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(items: any, searchText: string, key: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase().trim();
        return items.filter(it => {
            if (it.project[key]) {
                return it.project[key].toLowerCase().includes(searchText);
            } else {
                console.log('This invalid name');
            }
        });
    }
}
