import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from './store/reducers/basket.reducer';
import { wishlistReducer } from './store/reducers/wishlist.reducer';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NavigationModule,
        AppRoutingModule,
        StoreModule.forRoot({
          basket: basketReducer,
          wishlist: wishlistReducer,
        }),
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
