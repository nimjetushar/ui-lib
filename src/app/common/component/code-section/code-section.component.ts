import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

declare const PR: any;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'code-section',
  template: `
    <h2>{{ header }}</h2>
    <div class="content">
      <div class="sample">
        <ui-library-documentation-copy [content]="code" />
        <pre *ngFor="let c of codeRendering">
            <code class="prettyprint lang-html">{{c}}</code>
        </pre>
      </div>
    </div>
  `,
  styleUrls: ['./code-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'code-section',
  },
})
export class CodeSectionComponent implements AfterViewInit, OnInit {
  @Input() header!: string;
  @Input({ required: true }) code!: string[] | string;

  codeRendering!: string[];

  ngOnInit(): void {
    this.codeRendering = transformCodeInput(this.code);
  }

  ngAfterViewInit(): void {
    PR.prettyPrint();
  }
}

const transformCodeInput = (value: string[] | string): string[] => {
  return typeof value === 'string' ? [value] : value;
};
