import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'element-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  constructor() { }

  @Input() options:any;
  @Input() data:any;
  @Input() field:any = "label";
  @Input() placeholder:any = "Enter name of author";

  @Output() onChange: EventEmitter<any[]> = new EventEmitter(null);

  @ViewChild("viewpoint") viewpoint:ElementRef;
  
  filtered:any[] = [];
  search:string  = "";
  active:boolean = false;
  highlighted:number = 0;

  onSelect(item:any){
    this.toggle();
    this.onChange.emit(item);
    this.search = "";
  }

  toggle(){
    this.active = !this.active;
  }

  navigate(evt:KeyboardEvent){

    evt.preventDefault();

    switch(evt.keyCode){
      case 38:
        this.highlighted = (this.highlighted == 0)? this.filtered.length-1 : this.highlighted-1;
        break;
      case 40:
        this.highlighted = (this.highlighted == this.filtered.length-1)? 0 : this.highlighted+1;
        break;
      case 13:
        this.onSelect(this.filtered[this.highlighted]);
        break;
      default:
        this.filter(this.search);
        break;
    }

    if(this.viewpoint){
      const wrapper:HTMLDivElement = this.viewpoint.nativeElement;
      const activeItem:HTMLDivElement = wrapper.querySelector('.autocomplete__item.active');
      const scrollOffset = (activeItem && this.highlighted>3) ? activeItem.offsetTop-activeItem.offsetHeight : 0;
      wrapper.scrollTo({top: scrollOffset});
    }
  }

  filter(search:string){

    if(!this.data) return [];

    if(!search) return this.data;

    this.filtered = this.data.filter(item => item[this.field].toLowerCase().indexOf(search.toLowerCase()) !== -1);

    return this.filtered;

  }

}
