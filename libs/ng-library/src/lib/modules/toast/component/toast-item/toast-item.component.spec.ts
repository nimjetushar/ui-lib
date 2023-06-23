import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastItemComponent } from './toast-item.component';

describe('ToastItemComponent', () => {
  let component: ToastItemComponent;
  let fixture: ComponentFixture<ToastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastItemComponent);
    component = fixture.componentInstance;
    component.config = { id: '1' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
