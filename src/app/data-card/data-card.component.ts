import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../Data';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent {
  @Input()
  data: Data = { Id: 0, Text: '', IsSelect: false };
  @Output()
  cardClickEvent = new EventEmitter<Data>();
  color: string;

  constructor() { }

  getColor() {
    return this.data.IsSelect ? 'Yellow' : 'White';
  }
  cardClick() {
    this.data.IsSelect = true;
    this.cardClickEvent.emit(this.data);
  }

}
