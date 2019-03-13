import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityComponent } from './utility.component';
import { Common } from '../common/common.module';

describe('UtilityComponent', () => {
  let component: UtilityComponent;
  let fixture: ComponentFixture<UtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityComponent],
      imports: [Common]
    })
      .compileComponents();
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
