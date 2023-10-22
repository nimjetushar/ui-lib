import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as DeviceDetector from 'device-detector-js';
import { Detect } from 'tutility';

@Component({
  selector: 'ui-library-documentation-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilityComponent {
  deviceDetail!: DeviceDetector.DeviceDetectorResult;

  detecBrowserHandler(): void {
    const detect = new Detect();
    this.deviceDetail = detect.parse(navigator.userAgent);
    console.log(this.deviceDetail);
  }
}
