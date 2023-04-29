import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on menu click', () => {
    spyOn(component.sideBarToggled, 'emit');
    const menu = fixture.debugElement.query(By.css('#menu-icon-container'));
    menu.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    expect(component.sideBarToggled.emit).toHaveBeenCalled();
  });

  it('should emit event on logo click', () => {
    component.logoSrc = 'test';
    spyOn(component.logoClickEmitter, 'emit');
    fixture.detectChanges();

    const logo = fixture.debugElement.query(By.css('#logo-container .logo'));
    logo.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    expect(component.logoClickEmitter.emit).toHaveBeenCalled();
  });

  it('should render proper title', () => {
    component.title = 'App title';
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('.title-container .title'));
    expect(title.nativeElement.textContent.trim()).toBe('App title');
  });
});
