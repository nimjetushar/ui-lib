import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from '@fourjs/ng-library';

import { Common } from '../../../common';
import { UtilityComponent } from './utility.component';

describe('UtilityComponent', () => {
  let component: UtilityComponent;
  let fixture: ComponentFixture<UtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilityComponent],
      imports: [Common, ButtonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
