import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownModule, TooltipModule } from '@fourjs/ng-library';

import { TooltipDemoComponent } from './tooltip-demo.component';
import { Common } from '../../../common';

describe('TooltipDemoComponent', () => {
  let component: TooltipDemoComponent;
  let fixture: ComponentFixture<TooltipDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDemoComponent],
      imports: [Common, TooltipModule, DropdownModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
