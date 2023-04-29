import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DemoWrapperComponent } from './demo-wrapper.component';
import { NgLibrary, ToastService } from '@fourjs/ng-library';

describe('DemoWrapperComponent', () => {
  let component: DemoWrapperComponent;
  let fixture: ComponentFixture<DemoWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoWrapperComponent],
      imports: [NgLibrary],
      providers: [ToastService]
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
