import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeEndpointService {

  constructor() { }

  data:any[] =  [
    {value:'1', label:'Option one'},
    {value:'2', label:'Option two'},
    {value:'2', label:'Option two'},
    {value:'2', label:'Option two'},
    {value:'2', label:'Option two'},
    {value:'3', label:'Option three'},
    {value:'3', label:'Option three'},
    {value:'3', label:'Option three'},
    {value:'4', label:'Option four'},
    {value:'4', label:'Option four'},
  ]

  getData(search:string){

    const data = Object.assign(this.data);

    if(!data) return [];

    if(!search) return data;

    return data.filter((item:any) => item['label'].toLowerCase().indexOf(search.toLowerCase()) !== -1);

  }
}
