import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pagination"
})
export class PaginationPipe implements PipeTransform {
  transform(data: any[], offsetStart: number, offsetEnd: number): any[] {
    return data.filter((item, idx) => idx >= offsetStart && idx < offsetEnd);
  }
}
