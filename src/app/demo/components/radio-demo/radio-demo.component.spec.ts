import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule, RadioModule } from '@fourjs/ng-library';
import { FormsModule } from '@angular/forms';

import { RadioDemoComponent } from './radio-demo.component';
import { Common } from '../../../common';

describe('RadioDemoComponent', () => {
  let component: RadioDemoComponent;
  let fixture: ComponentFixture<RadioDemoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [RadioDemoComponent],
      imports: [RadioModule, FormsModule, Common, ButtonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
