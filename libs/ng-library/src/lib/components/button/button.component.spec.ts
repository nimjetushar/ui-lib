import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { BadgeComponent } from '../badge/badge.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent, BadgeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign proper badge position', () => {
    expect(component.bPos).toEqual('left');

    component.badgePosition = 'right';
    expect(component.bPos).toEqual('right');

    component.badgePosition = 'right123' as any;
    expect(component.bPos).toEqual('left');
  });

  it('should assign proper button type', () => {
    expect(component.buttonType).toEqual('primary');

    component.type = 'secondary';
    expect(component.buttonType).toEqual('secondary');

    component.type = 'right123' as any;
    expect(component.buttonType).toEqual('primary');
  });
});
