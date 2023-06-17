import { Component } from '@angular/core';
import { DialogService } from '@fourjs/ng-library';

@Component({
  selector: 'ui-library-documentation-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss'],
})
export class DialogDemoComponent {
  constructor(private dialogService: DialogService) {}

  openModel() {
    this.dialogService.open({ title: 'test' + Math.random() });
  }
}
