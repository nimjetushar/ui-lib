import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { DropdownModule } from 'primeng/dropdown';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [
        DropdownModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value', () => {
    spyOn(component, 'onChange');
    const val = { label: 'test', value: 'test' };
    component.writeValue(val);
    expect(component.value).toEqual(val);
    expect(component.onChange).toHaveBeenCalledWith(val);
  });

  it('should emit blur event', () => {
    spyOn(component.onBlur, 'emit');
    component.blurHandler(undefined);
    expect(component.onBlur.emit).toHaveBeenCalled();
  });

  it('should emit focus event', () => {
    spyOn(component.onFocus, 'emit');
    component.focusHandler(undefined);
    expect(component.onFocus.emit).toHaveBeenCalled();
  });
});
