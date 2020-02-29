export enum TablePayloadType {
  Next = "next",
  Previous = "previous",
  Sort = "sort"
}

export interface OnTableChangePayload {
  type: TablePayloadType;
  payload: any;
}

export interface TableData {
  data: any[];
  options: TableOptions;
}
export interface TableOptions {
  columns?: string[];
  limit: number;
  offset: number;
  page: TablePageOptions;
}

export interface TablePageOptions {
  count?: number;
  current: number;
}
