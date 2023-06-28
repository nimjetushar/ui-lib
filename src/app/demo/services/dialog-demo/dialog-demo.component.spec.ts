import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule, DialogModule } from '@fourjs/ng-library';

import { DialogDemoComponent } from './dialog-demo.component';
import { Common } from '../../../common';

describe('DialogDemoComponent', () => {
  let component: DialogDemoComponent;
  let fixture: ComponentFixture<DialogDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogDemoComponent],
      imports: [Common, ButtonModule, DialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
