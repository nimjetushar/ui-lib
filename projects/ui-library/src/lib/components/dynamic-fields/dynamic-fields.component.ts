import { Component, OnInit, Input } from '@angular/core';

export interface Fields {
  label: 'string';
  type: 'text' | 'checkbox';
}

@Component({
  selector: 't-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss']
})
export class DynamicFieldsComponent implements OnInit {

  @Input() fields: Fields[] = [];

  data: any = {};

  constructor() { }

  ngOnInit(): void { }

}
