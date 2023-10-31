import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

declare const PR: any;

@Component({
  selector: 'ui-library-documentation-code-section',
  template: `
    <h2>{{ header }}</h2>
    <div class="content">
      <div class="sample">
        <ui-library-documentation-copy [content]="code" />
        <pre *ngFor="let c of code">
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
export class CodeSectionComponent implements AfterViewInit {
  @Input() header!: string;
  @Input() code!: string[];

  ngAfterViewInit(): void {
    PR.prettyPrint();
  }
}
