import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgLibrary, ToastService } from '@fourjs/ng-library';
require('code-prettify/src/prettify.js');

import { DemoWrapperComponent } from './demo-wrapper.component';

describe('DemoWrapperComponent', () => {
  let component: DemoWrapperComponent;
  let fixture: ComponentFixture<DemoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoWrapperComponent],
      imports: [NgLibrary],
      providers: [ToastService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
