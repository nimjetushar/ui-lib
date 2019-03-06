import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {

  libLists: Array<{ name: string, url: string, icon: string }> = [
    {
      name: 'Material Css',
      url: 'https://materializecss.com/',
      icon: 'fa-map'
    },
    {
      name: 'Grid system',
      url: 'https://nimjetushar.github.io/grid-css/',
      icon: 'fa-th'
    },
    {
      name: 'Font awesome',
      url: 'https://fontawesome.com/v4.7.0/icons/',
      icon: 'fa-font-awesome'
    }
  ];

  constructor() { }
}
