import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownModule } from '@fourjs/ng-library';

import { DropdownDemoComponent } from './dropdown-demo.component';
import { Common } from '../../../common';

describe('DropdownDemoComponent', () => {
  let component: DropdownDemoComponent;
  let fixture: ComponentFixture<DropdownDemoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DropdownDemoComponent],
      imports: [Common, DropdownModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
