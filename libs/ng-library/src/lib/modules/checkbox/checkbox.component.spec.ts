import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CheckboxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit checkbox selection status', () => {
    jest.spyOn(component.modelChange, 'emit');
    component.handleOnChange({ target: { checked: true } });
    expect(component.modelChange.emit).toHaveBeenCalledWith(true);

    component.handleOnChange({ target: { checked: false } });
    expect(component.checked).toEqual(false);
    expect(component.modelChange.emit).toHaveBeenCalledWith(false);
  });
});
