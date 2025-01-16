import { HeaderComponent } from './header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { wishlistReducer } from '@app/store/reducers/wishlist.reducer';
import { basketReducer } from '@app/store/reducers/basket.reducer';
import { StoreModule } from '@ngrx/store';
import { ControlsModule } from '@app/controls/contols.module';

const initialState = {
  basket: { itemIds: [] },
  wishlist: { itemIds: [] },
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let routerMock: Router;
  //   let store: MockStore<AppState>;
  //   let router: Router;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    const events = new ReplaySubject<any>(1);
    routerMock = {
      events,
      navigate: jest.fn(),
      url: '/home',
    } as unknown as Router;

    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        ControlsModule,
        StoreModule.forRoot({
          basket: basketReducer,
          wishlist: wishlistReducer,
        }),
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } },
        },
        { provide: Router, useValue: routerMock },
      ],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // store = TestBed.inject(MockStore);
    // router = TestBed.inject(Router);
  });

  it('should initialize with correct properties', () => {
    expect(component.showSearchSubMenu).toBe(false);
    expect(component.showSideMenu).toBe(false);
    expect(component.loggedIn).toBe(false);
    expect(component.skipLinkHref).toBe('#main-content');
    expect(component.showHeader).toBe(true);
    expect(component.isHome).toBe(true);
  });

  it('should toggle search menu visibility', () => {
    expect(component.showSearchSubMenu).toBe(false);
    component.toggleSearchMenu();
    expect(component.showSearchSubMenu).toBe(true);
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
