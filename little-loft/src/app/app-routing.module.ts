import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/components/product-list/product-list.component';
import { OnboardingComponent } from './pages/components/onboarding/onboarding.component';
import { ExploreComponent } from './pages/components/explore/explore.component';
import { SearchPageComponent } from './pages/components/search-page/search-page.component';
import { InboxComponent } from './pages/components/inbox/inbox.component';
import { LogInComponent } from './pages/components/log-in/log-in.component';
import { ProfileComponent } from './pages/components/profile/profile.component';
import { ProductItemComponent } from './pages/components/product-item/product-item.component';
import { BasketComponent } from './pages/components/basket/basket.component';
import { FavouritesComponent } from './pages/components/favourites/favourites.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'sell', component: OnboardingComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'login', component: LogInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'product', component: ProductItemComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'favourites', component: FavouritesComponent },
  //{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
