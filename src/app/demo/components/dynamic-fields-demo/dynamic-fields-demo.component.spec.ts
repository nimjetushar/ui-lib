import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldsDemoComponent } from './dynamic-fields-demo.component';

describe('DynamicFieldsDemoComponent', () => {
  let component: DynamicFieldsDemoComponent;
  let fixture: ComponentFixture<DynamicFieldsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFieldsDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFieldsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
