import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldsComponent } from './dynamic-fields.component';
import { ButtonComponent } from '../button/button.component';
import { BadgeComponent } from '../badge/badge.component';

describe('DynamicFieldsComponent', () => {
  let component: DynamicFieldsComponent;
  let fixture: ComponentFixture<DynamicFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicFieldsComponent,
        ButtonComponent,
        BadgeComponent
      ],
      imports: [FormsModule]
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
