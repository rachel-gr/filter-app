import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../Data';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  list: Data[] = [];
  // list$: Observable<Data[]>;
  filterText: string = '';
  selectedValue: string = 'all';
  countSame: number;
  countContains: number;
  listSelect: Array<string> = new Array<string>();

  constructor(private dataListService: DataListService) { }

  ngOnInit(): void {
    this.dataListService.observableData.subscribe(data => { this.list = data });
    this.list.forEach((a): void => {
      if (a.IsSelect == true) this.listSelect.push(a.Text);
    });
  }

  onSearchChange(searchValue: string) {
    this.countSame = this.list.filter((a: Data) => { a.Text == searchValue }).length;
  }
  cardClicked(data: Data) {
    this.listSelect.push(data.Text);
    // this.dataListService.observableData.subscribe(data => { this.list = data; console.log(data); });
    this.selectedValue = 'all';

  }


}
