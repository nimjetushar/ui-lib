import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {

  public compSyntax: string;
  constructor() { }

  ngOnInit(): void {
    this.compSyntax = '<t-badge badge="fa-home"></t-badge>';
  }
}
