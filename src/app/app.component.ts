import { Component, OnInit } from "@angular/core";
import { OnChangePayload, TypeEnum } from "./elements";
import { FakeEndpointService } from "./services";
import {
  OnTableChangePayload,
  TableData,
  TablePayloadType
} from "./elements/table/types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Elements";

  table_data: TableData = {
    data: [],
    options: {
      columns: [],
      limit: 5,
      offset: 0,
      page: {
        count: 1,
        current: 1
      }
    }
  };

  constructor(private _fs: FakeEndpointService) {}

  ngOnInit(): void {
    const table_options = {
      limit: 5,
      offset: 0,
      columns: [],
      page: {
        current: 1
      }
    };

    this.table_data = this._fs.getTableData(table_options);
    console.log(this.table_data);
  }

  data: any[] = [];

  onTableChange(event: OnTableChangePayload) {
    const table_options = {
      ...event.payload,
      offset: event.payload.page.current * event.payload.limit,
      page: {
        current:
          event.type == TablePayloadType.Next
            ? event.payload.page.current + 1
            : event.payload.page.current - 1
      }
    };

    this.table_data = this._fs.getTableData(table_options);

    console.log(this.table_data);
  }

  onChange(data: OnChangePayload) {
    switch (data.type) {
      case TypeEnum.Filter:
        this.data = this._fs.getData(data.payload);
        break;
      case TypeEnum.Select:
        console.log(data.payload);
        break;
    }
  }
}
