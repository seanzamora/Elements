import { Component, OnInit, Input } from "@angular/core";
import { FakeEndpointService } from "../../services/fake-endpoint.service";
@Component({
  selector: "element-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  constructor(private fs: FakeEndpointService) {}

  @Input() data: any[];
  @Input() columns: string[] = [];
  @Input() limiter: number = 5;

  limiterStart: number = 0;
  limiterEnd: number;

  pages: number = 1;
  currentPage: number = 1;

  ngOnInit(): void {
    this.data = this.fs.getTableData(null);
    this.limiterEnd = this.limiter;

    this.initColumns();
    this.initPagination();
  }

  initColumns() {
    if (this.columns.length == 0 && this.data.length > 0) {
      this.columns = Object.keys(this.data[0]);
    }
  }

  initPagination() {
    const count = this.data.length / this.limiter;
    const roundUp = Number.isInteger(count);
    this.pages = !roundUp ? Math.round(count) + 1 : count;
  }

  pagerNext() {
    if (this.currentPage < this.pages) {
      this.currentPage++;
      this.limiterStart = this.limiterStart + this.limiter;
      this.limiterEnd = this.limiterEnd + this.limiter;
    }
  }

  pagerPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.limiterStart = this.limiterStart - this.limiter;
      this.limiterEnd = this.limiterEnd - this.limiter;
    }
  }
}
