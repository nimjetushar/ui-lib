import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-library-documentation-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  readonly gridUrl = 'https://nimjetushar.github.io/grid-css';
}
