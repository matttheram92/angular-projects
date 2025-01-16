import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesComponent } from './favourites.component';
import { PageSectionsModule } from '@app/page-sections/page-sections.module';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from '@app/store/reducers/basket.reducer';
import { wishlistReducer } from '@app/store/reducers/wishlist.reducer';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesComponent],
      imports: [
        PageSectionsModule,
        StoreModule.forRoot({
          basket: basketReducer,
          wishlist: wishlistReducer,
        }),
      ],
    });
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
