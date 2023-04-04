import { comModules } from '__test__/common.imports';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RadioDemoComponent } from './radio-demo.component';

describe('RadioDemoComponent', () => {
  let component: RadioDemoComponent;
  let fixture: ComponentFixture<RadioDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioDemoComponent],
      imports: [...comModules]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
