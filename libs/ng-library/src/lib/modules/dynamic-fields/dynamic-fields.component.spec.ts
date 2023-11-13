import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from '../button/button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { RadioComponent } from '../radio/radio.component';
import { DynamicFieldsComponent } from './dynamic-fields.component';

describe('DynamicFieldsComponent', () => {
  let component: DynamicFieldsComponent;
  let fixture: ComponentFixture<DynamicFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFieldsComponent, ButtonComponent, BadgeComponent, RadioComponent, DropdownComponent],
      imports: [FormsModule],
    }).compileComponents();
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
