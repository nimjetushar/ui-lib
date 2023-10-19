import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { runOnPushChangeDetection } from '@ui-library-documentation/shared/unit-test';

import { MenuIconComponent } from '../menu-icon/menu-icon.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, MenuIconComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on menu click', async () => {
    jest.spyOn(component.sideBarToggled, 'emit');
    const menu = fixture.debugElement.query(By.css('#menu-icon-container'));
    menu.triggerEventHandler('click', undefined);
    await runOnPushChangeDetection(fixture);
    expect(component.sideBarToggled.emit).toHaveBeenCalled();
  });

  it('should emit event on logo click', async () => {
    component.logoSrc = 'test';
    jest.spyOn(component.logoClickEmitter, 'emit');
    await runOnPushChangeDetection(fixture);

    const logo = fixture.debugElement.query(By.css('#logo-container .logo'));
    logo.triggerEventHandler('click', undefined);
    await runOnPushChangeDetection(fixture);

    expect(component.logoClickEmitter.emit).toHaveBeenCalled();
  });

  it('should render proper title', async () => {
    component.title = 'App title';
    await runOnPushChangeDetection(fixture);

    const title = fixture.debugElement.query(By.css('.title-container .title'));
    console.log(JSON.stringify(title.nativeElement.innerHTML));
    expect(title.nativeElement.textContent.trim()).toBe('App title');
  });
});
