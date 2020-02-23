import { Injectable } from "@angular/core";

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

  getTableData(filter: any) {
    const data = Object.assign(this.table_data);

    if (!data) return [];

    return data;
  }
}
