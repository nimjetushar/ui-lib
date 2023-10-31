import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { UITemplate } from '@fourjs/ng-library';

import { Options } from '../types';

@Component({
  selector: 'ui-library-documentation-demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DemoWrapperComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) header!: string;
  @Input() subHeader?: string;
  @Input() code?: string[];
  @Input() importSyntax?: string;
  @Input()
  set options(docData: Options | undefined | null) {
    if (docData) {
      this.enableOptions = true;
      this._options = docData;
    }
  }
  get options() {
    return this._options;
  }

  @ViewChild('output', { static: true }) outputWrapper!: ElementRef;
  @ViewChild('ref', { static: true }) refWrapper!: ElementRef;
  @ContentChildren(UITemplate) templates!: QueryList<UITemplate>;

  outputContent: TemplateRef<any>[] = [];
  documentContent?: TemplateRef<any>;
  enableOutput = true;
  enableDoc = true;
  enableOptions!: boolean;

  private _options?: Options | null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.enableOutput = !this.outputWrapper.nativeElement.childNodes.length;
    this.enableDoc = !this.refWrapper.nativeElement.childNodes.length;
  }

  ngAfterViewInit(): void {
    this.outputContent = [];
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'output':
          this.outputContent.push(item.template);
          break;
        case 'document':
          this.documentContent = item.template;
          break;
      }
    });
    this.cdr.detectChanges();
  }
}
