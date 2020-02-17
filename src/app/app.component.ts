import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elements';


  ac_data:any[] = [
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

  onAcChange(item:any){
    console.log(item);
  }

}
