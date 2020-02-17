import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocomplete_filter'
})
export class AutocompleteFilterPipe implements PipeTransform {

  transform(items: any[], search:string , field:string, filtered:any[]): any[] {

   if(!items) return [];

   if(!search) return items;

   filtered = items.filter(item => item[field].toLowerCase().indexOf(search.toLowerCase()) !== -1);

   return filtered;
   
  }

}
