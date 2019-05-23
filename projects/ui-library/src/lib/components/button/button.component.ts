import { Component, Input } from '@angular/core';

@Component({
  selector: 't-button',
  template: `
    <button class="btn waves-effect waves-light {{buttonType}}"
      [ngClass]="{'disabled': disabled, 'btn-large': isLarge, 'btn-small': !isLarge}" [disabled]="disabled">
      <t-badge *ngIf="badge" [class]="bPos" [badge]="badge"></t-badge>
      {{label}}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() badge: string;
  @Input() disabled: boolean;
  @Input() isLarge: boolean;
  @Input() set badgePosition(val: 'left') {
    this.bPos = ['right', 'left'].includes(val) ? val : 'left';
  }

  @Input() set type(val: 'primary' | 'secondary' | 'tertiary') {
    this.buttonType = ['primary', 'secondary', 'tertiary'].includes(val) ? val : undefined;
  }

  public buttonType: string;
  public bPos: string = 'left';
}
