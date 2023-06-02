import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownModule } from 'primeng/dropdown';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [DropdownModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value', () => {
    jest.spyOn(component, 'onChange');
    const val = { label: 'test', value: 'test' };
    component.writeValue(val);
    expect(component.value).toEqual(val);
    expect(component.onChange).toHaveBeenCalledWith(val);
  });

  it('should emit blur event', () => {
    jest.spyOn(component.onBlur, 'emit');
    component.blurHandler(null as unknown as Event);
    expect(component.onBlur.emit).toHaveBeenCalled();
  });

  it('should emit focus event', () => {
    jest.spyOn(component.onFocus, 'emit');
    component.focusHandler(null as unknown as Event);
    expect(component.onFocus.emit).toHaveBeenCalled();
  });
});
