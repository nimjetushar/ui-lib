import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFieldsModule } from '@fourjs/ng-library';

import { DynamicFieldsDemoComponent } from './dynamic-fields-demo.component';
import { Common } from '../../../common';

describe('DynamicFieldsDemoComponent', () => {
  let component: DynamicFieldsDemoComponent;
  let fixture: ComponentFixture<DynamicFieldsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFieldsDemoComponent],
      imports: [Common, DynamicFieldsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFieldsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
