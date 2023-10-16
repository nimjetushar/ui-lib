import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-library-documentation-common-note',
  templateUrl: './common-note.component.html',
  styleUrls: ['./common-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonNoteComponent {}
