import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DemoWrapperComponent implements OnInit {
  @Input() header: string;

  isDemoContainer: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: NavigationEnd) => event instanceof NavigationEnd)
    ).subscribe((x) => {
      this.enableCompContainer(x.url);
    });

    this.enableCompContainer(this.router.url);
  }

  private enableCompContainer(url: string): void {
    this.isDemoContainer = url.includes('component');
  }

}