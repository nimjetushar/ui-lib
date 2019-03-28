import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { BadgeComponent } from '../badge/badge.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent, BadgeComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on menu click', () => {
    spyOn(component['_router'], 'navigate');

    component.onMenuClick({ route: 'test', label: 'test' }, 0);
    expect(component['_router'].navigate).toHaveBeenCalledWith(['test']);
  });

  it('should navigate on sub menu click', () => {
    spyOn(component['_router'], 'navigate');
    spyOn(component.menuClickTrigger, 'emit');

    const menu = { route: 'test', label: 'test' },
      subMenu = { route: 'submenu', label: 'submenu' };
    component.onSubMenuClick(menu, subMenu, 0, 0);
    expect(component['_router'].navigate).toHaveBeenCalledWith(['submenu']);
    expect(component.menuClickTrigger.emit).toHaveBeenCalledWith({ isParent: false, menu: menu, subMenu: subMenu });
  });

  it('should expand on menu toggle', () => {
    component.toggleMenu();
    expect(component.expanded).toBeTruthy();
  });


  it('should emit event on menu toggle', () => {
    spyOn(component.sliderStatus, 'emit');
    component.toggleMenu();
    expect(component.sliderStatus.emit).toHaveBeenCalled();
  });
});
