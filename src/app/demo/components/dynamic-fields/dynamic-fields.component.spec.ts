import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldsComponent } from './dynamic-fields.component';
import { comModules } from '__test__/common.imports';

describe('DynamicFieldsComponent', () => {
  let component: DynamicFieldsComponent;
  let fixture: ComponentFixture<DynamicFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFieldsComponent],
      imports: [...comModules]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
