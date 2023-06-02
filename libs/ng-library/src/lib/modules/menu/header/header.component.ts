import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 't-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() logoSrc!: string;
  @Input() routeLink!: string;

  @Output() sideBarToggled = new EventEmitter<boolean>();
  @Output() logoClickEmitter = new EventEmitter();

  handleSidebarToggle(): void {
    this.sideBarToggled.emit(true);
  }

  onLogoClick(): void {
    this.logoClickEmitter.emit();
  }
}
