import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let routerMock: jest.Mocked<Router>;

  beforeEach(() => {
    routerMock = {
      events: of(),
      navigate: jest.fn(),
      url: '/home',
    } as unknown as jest.Mocked<Router>;

    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerMock }],
    });

    component = new HeaderComponent(routerMock);
  });

  it('should initialize with correct properties', () => {
    expect(component.showSearchSubMenu).toBe(false);
    expect(component.showSideMenu).toBe(false);
    expect(component.loggedIn).toBe(false);
    expect(component.skipLinkHref).toBe('#main-content');
    expect(component.showHeader).toBe(true);
    expect(component.isHome).toBe(true);
  });

  it('should update skipLinkHref and showHeader on router events', () => {
    const newUrl = '/explore';
    const navigationEvent = { url: newUrl };

    Object.defineProperty(routerMock, 'url', { value: newUrl });

    (routerMock.events as Subject<any>).next(navigationEvent);

    expect(component.skipLinkHref).toBe(`${newUrl}#main-content`);
    expect(component.showHeader).toBe(true);
    expect(component.isHome).toBe(false);
  });

  it('should toggle search menu visibility', () => {
    expect(component.showSearchSubMenu).toBe(false);
    component.toggleSearchMenu();
    expect(component.showSearchSubMenu).toBe(true);
  });

  it('should navigate to a given route', () => {
    component.navigateToRoute('profile');
    expect(routerMock.navigate).toHaveBeenCalledWith(['profile']);
  });

  it('should hide search submenu on outside click', () => {
    const eventMock = {
      target: document.createElement('div'),
    } as unknown as MouseEvent;

    const targetElement = eventMock.target as HTMLElement;

    jest.spyOn(targetElement, 'closest').mockReturnValue(null);

    component.showSearchSubMenu = true;
    component.onOutsideClick(eventMock);

    expect(component.showSearchSubMenu).toBe(false);
  });

  it('should not hide search submenu if clicking inside', () => {
    const searchButton = document.createElement('div');
    searchButton.id = 'btnSearch';

    const eventMock = {
      target: searchButton,
    } as unknown as MouseEvent;

    jest
      .spyOn(searchButton, 'closest')
      .mockImplementation((selector: string) =>
        selector === '#btnSearch' ? searchButton : null
      );

    component.showSearchSubMenu = true;
    component.onOutsideClick(eventMock);

    expect(component.showSearchSubMenu).toBe(true);
  });
});
