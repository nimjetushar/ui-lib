import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { isUndefined } from 'tutility';

import { Dialog } from '../../class/dialog';
import { Nullable } from '../../../../core/ts-helper';
import { DynamicDialogComponentType } from '../../type';
import { DialogContentDirective } from './dialog-content';

@Component({
  selector: 't-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent extends Dialog implements AfterViewInit, OnInit {
  @ViewChild(DialogContentDirective)
  insertionPoint: Nullable<DialogContentDirective>;

  childComponentType: Nullable<DynamicDialogComponentType>;

  private componentRef: Nullable<ComponentRef<any>>;

  constructor(
    elementRef: ElementRef,
    private cd: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(elementRef);
  }

  ngOnInit(): void {
    const onDestroySub = this.dialogRef.onDestroy.subscribe(() => {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
      onDestroySub.unsubscribe();
    });
  }

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  private loadChildComponent(
    componentType: Nullable<DynamicDialogComponentType>
  ) {
    if (isUndefined(componentType)) {
      return;
    }

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.insertionPoint?.viewContainerRef;
    viewContainerRef?.clear();

    this.componentRef = viewContainerRef?.createComponent(componentFactory);
    if (this.componentRef) {
      this.componentRef.instance.dialogRef = this.dialogRef;
    }
  }
}
