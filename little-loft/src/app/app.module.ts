import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NavigationModule } from './navigation/navigation.module';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from './store/reducers/basket.reducer';
import { wishlistReducer } from './store/reducers/wishlist.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NavigationModule,
    StoreModule.forRoot({ basket: basketReducer, wishlist: wishlistReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
