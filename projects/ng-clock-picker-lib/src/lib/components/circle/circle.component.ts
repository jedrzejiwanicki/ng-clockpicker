import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener } from '@angular/core';
import { fromEvent } from "rxjs";

@Component({
  selector: 'ng-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CircleComponent implements OnInit {
  @Input() items: Array<number>;
  @Input() mode: string;
  @Output() onItemChange: EventEmitter<number> = new EventEmitter();
  moveLock = true;
  constructor() { }

  ngOnInit() {
  }

  handleClick(item: number) {
    this.onItemChange.emit(item);
  }

  // @HostListener('mouseup', ['$event'])
  // onMouseUp(event) {
  //   this.moveLock = true;
  // }
  // @HostListener('mousedown', ['$event'])
  // onMouseDown(event) {
  //   this.moveLock = false;
  // }
  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event) {
  //   if (!this.moveLock) {
  //     this.event = fromEvent(event);
  //   }
  // }
}
