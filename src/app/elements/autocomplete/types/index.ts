export enum TypeEnum{
    Filter = "filter",
    Select = "select"
}
export interface OnChangePayload {
    type: TypeEnum;
    payload: any;
}
