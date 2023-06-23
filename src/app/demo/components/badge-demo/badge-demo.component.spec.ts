import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeModule } from '@fourjs/ng-library';

import { BadgeDemoComponent } from './badge-demo.component';
import { Common } from '../../../common';

describe('BadgeDemoComponent', () => {
  let component: BadgeDemoComponent;
  let fixture: ComponentFixture<BadgeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeDemoComponent],
      imports: [Common, BadgeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
