import { Injectable } from "@angular/core";
import { TableData, TableOptions } from "../elements/table/types";

@Injectable({
  providedIn: "root"
})
export class FakeEndpointService {
  constructor() {}

  data: any[] = [
    { value: "1", label: "Option one" },
    { value: "2", label: "Option two" },
    { value: "2", label: "Option two" },
    { value: "2", label: "Option two" },
    { value: "2", label: "Option two" },
    { value: "3", label: "Option three" },
    { value: "3", label: "Option three" },
    { value: "3", label: "Option three" },
    { value: "4", label: "Option four" },
    { value: "4", label: "Option four" }
  ];

  table_data: any[] = [
    { id: "1", name: "Option 1", description: "Random text is placed here." },
    { id: "2", name: "Option 2", description: "Random text is placed here." },
    { id: "3", name: "Option 3", description: "Random text is placed here." },
    { id: "4", name: "Option 4", description: "Random text is placed here." },
    { id: "5", name: "Option 5", description: "Random text is placed here." },
    { id: "6", name: "Option 6", description: "Random text is placed here." },
    { id: "7", name: "Option 7", description: "Random text is placed here." },
    { id: "8", name: "Option 8", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "9", name: "Option 9", description: "Random text is placed here." },
    { id: "10", name: "Option 10", description: "Random text is placed here." }
  ];

  getData(search: string) {
    const data = Object.assign(this.data);

    if (!data) return [];

    if (!search) return data;

    return data.filter(
      (item: any) =>
        item["label"].toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  getTableData(options: TableOptions): TableData {
    if (options) {
      const data = Object.assign(this.table_data);

      const count = data.length / options.limit;

      const roundUp = Number.isInteger(count);

      const pages_count = !roundUp ? Math.round(count) + 1 : count;

      const table: TableData = {
        data: data.filter(
          (d, i) => i >= options.offset && i <= options.offset + options.limit
        ),
        options: {
          ...options,
          page: { count: pages_count, current: options.page.current }
        }
      };

      if (!data)
        return {
          data: [],
          options
        };

      return table;
    }
  }
}
