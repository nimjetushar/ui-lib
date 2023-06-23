import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from '@fourjs/ng-library';

import { ButtonDemoComponent } from './button-demo.component';
import { Common } from '../../../common';

describe('ButtonDemoComponent', () => {
  let component: ButtonDemoComponent;
  let fixture: ComponentFixture<ButtonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonDemoComponent],
      imports: [Common, ButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
