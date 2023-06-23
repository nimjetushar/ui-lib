import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertModule, DropdownModule } from '@fourjs/ng-library';

import { AlertDemoComponent } from './alert-demo.component';
import { Common } from '../../../common';

describe('AlertDemoComponent', () => {
  let component: AlertDemoComponent;
  let fixture: ComponentFixture<AlertDemoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AlertDemoComponent],
      imports: [Common, AlertModule, DropdownModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
