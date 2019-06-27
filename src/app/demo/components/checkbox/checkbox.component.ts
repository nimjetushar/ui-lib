import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  compSyntax: string = `<t-checkbox label="Checkbox"></t-checkbox>`;

  constructor() { }

  handleChange(event:any): void {
    console.log(event);
  }
}
