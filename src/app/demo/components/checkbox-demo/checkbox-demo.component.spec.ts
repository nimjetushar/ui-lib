import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxModule } from '@fourjs/ng-library';

import { Common } from '../../../common';
import { CheckboxDemoComponent } from './checkbox-demo.component';

describe('CheckboxDemoComponent', () => {
  let component: CheckboxDemoComponent;
  let fixture: ComponentFixture<CheckboxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxDemoComponent],
      imports: [Common, CheckboxModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
