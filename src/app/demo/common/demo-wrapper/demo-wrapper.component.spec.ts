import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoWrapperComponent } from './demo-wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DemoWrapperComponent', () => {
  let component: DemoWrapperComponent;
  let fixture: ComponentFixture<DemoWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoWrapperComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
