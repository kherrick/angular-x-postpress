import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationComponent implements OnInit {
  home = 'Home';
  admin = 'Admin';
  articles = 'Articles';
  rates = 'Rates';

  constructor() {}

  ngOnInit() {}

  slotChange($event) {
    const assigned = $event.target.assignedNodes();

    if (assigned.length > 0) {
      // const nav = assigned[0].querySelector('nav')
    }
  }
}
