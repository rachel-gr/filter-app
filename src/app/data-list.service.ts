import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from './Data';

@Injectable({
  providedIn: 'root'
})
export class DataListService {
  private DataList: Data[];
  public observableData: BehaviorSubject<Data[]>;

  constructor() {
    this.DataList = [
      { Id: 1, Text: '11', IsSelect: false },
      { Id: 2, Text: '12', IsSelect: false },
      { Id: 3, Text: '13', IsSelect: true },
      { Id: 4, Text: '14', IsSelect: false },
      { Id: 5, Text: '15', IsSelect: false },
      { Id: 6, Text: '16', IsSelect: false },
      { Id: 7, Text: '17', IsSelect: false },
      { Id: 8, Text: '18', IsSelect: false },
      { Id: 9, Text: '19', IsSelect: false },
      { Id: 10, Text: '20', IsSelect: false }
    ];
    this.observableData = <BehaviorSubject<Data[]>>new BehaviorSubject([]);
    this.observableData.next(this.DataList);
  }

  getData() {
    return this.observableData.asObservable();
  }

  UpdateData(data: Data) {
    let updateItem = this.DataList.find(a => { data.Id == a.Id});
    let index = this.DataList.indexOf(updateItem);
    this.DataList[index] = data;
    this.observableData.next(this.DataList);
    console.log('update data' + data.IsSelect + this.DataList)
  }
}
