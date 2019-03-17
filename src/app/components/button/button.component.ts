import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class ButtonComponent implements OnInit {
  @Input() public text: string;
  @Input() public type: string;

  constructor() {}

  ngOnInit() {}

  slotChange($event) {
    const assigned = $event.target.assignedNodes();

    if (assigned.length > 0) {}
  }
}
