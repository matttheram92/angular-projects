import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from '@app/store/app.state';
import { addToBasket } from '@app/store/actions/basket.actions';
import {
  addToWishlist,
  removeFromWishlist,
} from '@app/store/actions/wishlist.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT_EXAMPLE_DATA } from '@app/core/consts/dummy-data.consts';
import { ProductItem } from '@app/core/models/product-list.models';
import { ControlsModule } from '@app/controls/contols.module';
import { basketReducer } from '@app/store/reducers/basket.reducer';
import { wishlistReducer } from '@app/store/reducers/wishlist.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TypeographyModule } from '@app/typography/typography.module';

const mockRouter = {
  navigate: jest.fn(),
};

const initialState = {
  basket: { itemIds: [] },
  wishlist: { itemIds: [] },
};

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let store: MockStore<AppState>;
  let router: Router;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      imports: [
        ControlsModule,
        TypeographyModule,
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
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set product, basket, and wishlist status on init', async () => {
    const product: ProductItem = PRODUCT_EXAMPLE_DATA[0];
    const basketItemIds = [1, 2];
    const wishlistItemIds = [3];

    store.setState({
      basket: { itemIds: basketItemIds },
      wishlist: { itemIds: wishlistItemIds },
    });

    await component.ngOnInit();

    expect(component.product).toEqual(product);
    expect(component.inBasket).toBeTruthy();
    expect(component.inWishlist).toBeFalsy();
  });

  it('should add product to basket on button click', async () => {
    component.inBasket = false;
    jest.spyOn(store, 'dispatch');

    await component.addToBasket();

    expect(store.dispatch).toHaveBeenCalledWith(addToBasket({ id: 1 }));
    expect(component.inBasket).toBeTruthy();
  });

  it('should add product to wishlist on button click (not in wishlist)', async () => {
    component.inWishlist = false;
    jest.spyOn(store, 'dispatch');
    store.setState({
      basket: { itemIds: [] },
      wishlist: { itemIds: [] },
    });

    await component.addToWishlist();

    expect(store.dispatch).toHaveBeenCalledWith(addToWishlist({ id: 1 }));
    expect(component.inWishlist).toBeTruthy();
  });

  it('should remove product from wishlist on button click (in wishlist)', async () => {
    component.inWishlist = true;
    jest.spyOn(store, 'dispatch');
    store.setState({
      basket: { itemIds: [1] },
      wishlist: { itemIds: [1] },
    });

    await component.addToWishlist();

    expect(store.dispatch).toHaveBeenCalledWith(removeFromWishlist({ id: 1 }));
    expect(component.inWishlist).toBeFalsy();
  });

  it('should navigate to basket on "Buy Now" click', async () => {
    await component.addToBasket();

    expect(router.navigate).toHaveBeenCalledWith(['basket']);
  });
});
