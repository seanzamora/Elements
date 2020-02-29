import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TableData, OnTableChangePayload, TablePayloadType } from "./types";

@Component({
  selector: "element-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  constructor() {}

  @Input() table: TableData;

  @Output() onChange: EventEmitter<OnTableChangePayload> = new EventEmitter();

  ngOnInit(): void {
    this.initColumns();
  }

  initColumns() {
    if (this.table.options.columns.length == 0 && this.table.data.length > 0) {
      this.table.options.columns = Object.keys(this.table.data[0]);
    }
  }

  pagerNext() {
    if (this.table.options.page.current < this.table.options.page.count) {
      this.onChange.emit({
        type: TablePayloadType.Next,
        payload: { ...this.table.options }
      });
    }
  }

  pagerPrevious() {
    if (this.table.options.page.current > 1) {
      this.onChange.emit({
        type: TablePayloadType.Previous,
        payload: { ...this.table.options }
      });
    }
  }
}
