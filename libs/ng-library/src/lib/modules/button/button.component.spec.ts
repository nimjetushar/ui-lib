import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, BadgeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign proper button type', () => {
    expect(component.type).toEqual('primary');

    component.type = 'secondary';
    expect(component.type).toEqual('secondary');
  });
});
