import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'element-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  @Input() options:any;
  @Input() data:any;
  @Input() field:any = "label";
  @Input() placeholder:any = "Enter name of author";

  @Output() onChange: EventEmitter<any[]> = new EventEmitter(null);

  @ViewChild("viewpoint") viewpoint:ElementRef;
  @ViewChild("input") input:ElementRef;
  
  filtered:any[] = [];
  highlighted:number = 0;

  search:string  = "";
  active:boolean = false;

  /**
   * Triggers onChange EventEmitter and resets states.
   * @param item 
   */
  onSelect(item:any){
    this.toggle();

    this.onChange.emit(Object.assign(item));

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
navigate(evt:KeyboardEvent){

    evt.preventDefault();

    switch(evt.keyCode){
      case 38:
        this.highlighted = (this.highlighted == 0) ? this.filtered.length-1 : this.highlighted-1;
        break;
      case 40:
        this.highlighted = (this.highlighted == this.filtered.length-1) ? 0 : this.highlighted+1;
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
      const scrollOffset = (activeItem && this.highlighted > 3) ? activeItem.offsetTop - activeItem.offsetHeight : 0;
      wrapper.scrollTo({top: scrollOffset});
    }

  }

  /**
   * Filters autocomplete component @Input() data array.
   * @param search 
   * @returns  
   */
  filter(search:string){

    if(!this.data) return [];

    if(!search) return this.data;

    this.filtered = this.data.filter((item:any) => item[this.field].toLowerCase().indexOf(search.toLowerCase()) !== -1);

    return this.filtered;

  }

}
