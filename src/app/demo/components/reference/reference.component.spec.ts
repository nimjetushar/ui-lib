import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceComponent } from './reference.component';
import { Common } from '../../../common';

describe('ReferenceComponent', () => {
  let component: ReferenceComponent;
  let fixture: ComponentFixture<ReferenceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ReferenceComponent],
      imports: [Common],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
