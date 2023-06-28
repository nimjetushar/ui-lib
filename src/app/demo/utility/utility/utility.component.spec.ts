import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ButtonModule } from '@fourjs/ng-library';

import { UtilityComponent } from './utility.component';
import { Common } from '../../../common';

describe('UtilityComponent', () => {
  let component: UtilityComponent;
  let fixture: ComponentFixture<UtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityComponent],
      imports: [Common, ButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
