import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { DialogConfig } from '../../type';

@Component({
  selector: 't-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogHeaderComponent {
  @Input() config!: DialogConfig;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() close = new EventEmitter();
}
