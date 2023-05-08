import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { NavComponent } from './nav.component';
import { BadgeComponent } from '../../badge';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent, BadgeComponent],
      imports: [RouterTestingModule],
      providers: [Router],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on menu click', () => {
    jest.spyOn(component['router'], 'navigate');

    fixture.ngZone?.run(() => {
      component.onMenuClick({ route: 'test', label: 'test' }, 0);
    });

    expect(component['router'].navigate).toHaveBeenCalledWith(['test']);
  });

  it('should navigate on sub menu click', () => {
    jest.spyOn(component['router'], 'navigate');
    jest.spyOn(component.menuClickTrigger, 'emit');

    const menu = { route: 'test', label: 'test' },
      subMenu = { route: 'submenu', label: 'submenu' };
    fixture.ngZone?.run(() => {
      component.onSubMenuClick(menu, subMenu, 0, 0);
    });

    expect(component['router'].navigate).toHaveBeenCalledWith(['submenu']);
    expect(component.menuClickTrigger.emit).toHaveBeenCalledWith({
      isParent: false,
      menu,
      subMenu,
    });
  });

  it('should expand on menu toggle', () => {
    component.toggleMenu();
    expect(component.expanded).toBeTruthy();
  });

  it('should emit event on menu toggle', () => {
    jest.spyOn(component.sliderStatus, 'emit');
    component.toggleMenu();
    expect(component.sliderStatus.emit).toHaveBeenCalled();
  });
});
