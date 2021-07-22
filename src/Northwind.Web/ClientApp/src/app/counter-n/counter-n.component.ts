import { Component, OnInit, Input } from '@angular/core';
import * as internal from 'assert';

@Component({
  selector: 'app-counter-n',
  templateUrl: './counter-n.component.html',
  styleUrls: ['./counter-n.component.css']
})
export class CounterNComponent implements OnInit {

  nValue: number = 1
  public currentCount = 0

  constructor() { }

  ngOnInit() {
  }

  public incrementCounter(){
    this.currentCount += this.nValue
  }

}
