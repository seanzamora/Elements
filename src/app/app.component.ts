import { Component } from '@angular/core';
import { OnChangePayload, TypeEnum } from './elements';
import { FakeEndpointService } from './services'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elements';

  constructor(private _fs:FakeEndpointService){}

  data:any[] = [];

  onChange(data:OnChangePayload){
    switch(data.type){
      case TypeEnum.Filter:
        this.data = this._fs.getData(data.payload);
        break;
        case TypeEnum.Select:
        console.log(data.payload)
        break;
    }
  }

}
