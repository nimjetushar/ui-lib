import { Component, Input } from '@angular/core';

@Component({
  selector: 't-button',
  template: `
    <button class="btn waves-effect waves-light btn-small"
      [ngClass]="{'disabled': disabled, 'btn-large': large}" [disabled]="disabled">
      <t-badge *ngIf="badge" [class]="badgePosition" [badge]="badge"></t-badge>
      {{label}}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() badge: string;
  @Input() disabled: boolean;
  @Input() large: boolean;
  @Input() badgePosition: string = 'left';

  public buttonType: string;

  @Input() set type(val: 'primary' | 'secondary' | 'tertiary') {
    this.buttonType = ['primary', 'secondary', 'tertiary'].includes(val) ? val : undefined;
  }
}
