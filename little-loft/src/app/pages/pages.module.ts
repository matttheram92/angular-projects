import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SplashScreenModule } from '../page-sections/components/splash-screen/splash-screen.module';
import { HeroSectionModule } from '../page-sections/components/hero-section/hero-section.module';
import { PageSectionsModule } from '../page-sections/page-sections.module';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BasketComponent } from './components/basket/basket.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ControlsModule } from '../controls/contols.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    ProductListComponent,
    OnboardingComponent,
    ExploreComponent,
    SearchPageComponent,
    InboxComponent,
    LogInComponent,
    ProfileComponent,
    ProductItemComponent,
    BasketComponent,
    FavouritesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SplashScreenModule,
    HeroSectionModule,
    PageSectionsModule,
    ControlsModule,
  ],
  exports: [
    ProductListComponent,
    OnboardingComponent,
    ExploreComponent,
    SearchPageComponent,
    InboxComponent,
    LogInComponent,
    ProfileComponent,
    ProductItemComponent,
    BasketComponent,
    FavouritesComponent,
  ],
  providers: [],
})
export class PagesModule {}
