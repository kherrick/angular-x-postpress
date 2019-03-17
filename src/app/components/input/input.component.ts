import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class InputComponent implements OnInit {
  @Input() public label: string;
  @Input() public type: string;
  @Input() public value: string;

  constructor() {}

  ngOnInit() {
    // if (!this.label || this.label.length === 0) {
    //   console.error(`Label attribute must be provided!`);
    // }

    // if (!this.type || this.type.length === 0) {
    //   console.error(`Label attribute must be provided!`);
    // }
  }

  onChange($event) {
    this.value = $event.target.value;
  }

  slotChange($event) {
    const assigned = $event.target.assignedNodes();

    if (assigned.length > 0) {}
  }
}
