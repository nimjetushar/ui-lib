import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Common } from '../../../common';
import { ColorPalletComponent } from './color-pallet.component';

describe('ColorPalletComponent', () => {
  let component: ColorPalletComponent;
  let fixture: ComponentFixture<ColorPalletComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ColorPalletComponent],
      imports: [Common],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
