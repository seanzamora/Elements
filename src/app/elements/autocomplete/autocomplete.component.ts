import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { OnChangePayload, TypeEnum } from './types';

@Component({
  selector: 'element-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  @Input() data:any = [];
  @Input() placeholder:any = "Enter name of author";

  @Output() onChange: EventEmitter<OnChangePayload> = new EventEmitter(null);

  @ViewChild("viewpoint") viewpoint:ElementRef;
  @ViewChild("input") input:ElementRef;
  
  highlighted:number = 0;

  search:string  = "";
  active:boolean = false;

  /**
   * Triggers onChange EventEmitter and resets states.
   * @param item 
   */
  onSelect(item:any){
    this.toggle();

    this.onChange.emit({type: TypeEnum.Select, payload:Object.assign(item)});

    this.search = "";
    this.highlighted = 0;
  }

  /**
   * Toggles autocomplete component active state.
   */
  toggle(){
    this.active = !this.active;
    if(this.active) this.input.nativeElement.focus();
  }

  /**
   * Navigates autocomplete component filtered list.
   * @param evt:KeyboardEvent 
   */
  keyEvents(evt:KeyboardEvent){

    evt.preventDefault();
    
    switch(evt.keyCode){
      case 38: 
        this.highlighted = (this.highlighted == 0) ? this.data.length-1 : this.highlighted-1;
        break;
      case 40:
        this.highlighted = (this.highlighted == this.data.length-1) ? 0 : this.highlighted+1;
        break;
      case 13:
        this.onSelect(this.data[this.highlighted]);
        break;
      default:
        this.onChange.emit({type: TypeEnum.Filter, payload: this.search});
        break;
    }

    if(this.viewpoint){
      const wrapper:HTMLDivElement = this.viewpoint.nativeElement;
      const activeItem:HTMLDivElement = wrapper.querySelector('.autocomplete__item.active');
      const scrollOffset = (activeItem && this.highlighted > 3) ? activeItem.offsetTop - activeItem.offsetHeight : 0;
      wrapper.scrollTo({top: scrollOffset});
    }

  }
  
}


