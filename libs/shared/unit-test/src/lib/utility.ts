import { ChangeDetectorRef } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { ComponentFixture } from '@angular/core/testing';

export async function runOnPushChangeDetection(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fixture: ComponentFixture<any>
): Promise<void> {
  const changeDetectorRef =
    fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
  changeDetectorRef.detectChanges();
  return fixture.whenStable();
}
