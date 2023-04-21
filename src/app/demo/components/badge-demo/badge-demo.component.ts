import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IOptions } from '../../common';

@Component({
  selector: 'ui-library-documentation-badge-demo',
  templateUrl: './badge-demo.component.html',
  styleUrls: ['./badge-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDemoComponent implements OnInit {
  compSyntax!: string[];
  options!: IOptions;

  ngOnInit(): void {
    this.compSyntax = [
      `<t-badge badge="fa-home"></t-badge>`,
      `<t-badge badge="fa-font-awesome"></t-badge>`,
    ];

    this.options = {
      name: 't-badge',
      options: [
        {
          parameter: 'badge',
          type: 'string',
          desc: 'Icon class to render badge',
        },
      ],
    };
  }
}
