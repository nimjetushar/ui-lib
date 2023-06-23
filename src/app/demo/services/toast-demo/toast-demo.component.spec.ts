import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule, ToastModule } from '@fourjs/ng-library';

import { ToastDemoComponent } from './toast-demo.component';
import { Common } from '../../../common';

describe('ToastDemoComponent', () => {
  let component: ToastDemoComponent;
  let fixture: ComponentFixture<ToastDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastDemoComponent],
      imports: [Common, ButtonModule, ToastModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
