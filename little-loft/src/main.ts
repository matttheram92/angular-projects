import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { basketReducer } from './app/store/reducers/basket.reducer';
import { wishlistReducer } from './app/store/reducers/wishlist.reducer';
import { AppComponent } from './app/app.component';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideState({ name: 'basket', reducer: basketReducer }),
    provideState({ name: 'wishlist', reducer: wishlistReducer }),
  ],
});
