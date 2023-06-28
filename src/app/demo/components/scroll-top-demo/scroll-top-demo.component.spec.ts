import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NavigationModule } from '@fourjs/ng-library';

import { ScrollTopDemoComponent } from './scroll-top-demo.component';
import { Common } from '../../../common';

describe('ScrollTopDemoComponent', () => {
  let component: ScrollTopDemoComponent;
  let fixture: ComponentFixture<ScrollTopDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollTopDemoComponent],
      imports: [Common, NavigationModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTopDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
