import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SplashScreenModule } from '../page-sections/components/splash-screen/splash-screen.module';
import { HeroSectionModule } from '../page-sections/components/hero-section/hero-section.module';
import { PageSectionsModule } from '../page-sections/page-sections.module';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPageComponent } from './components/search-page/search-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    OnboardingComponent,
    ExploreComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    SplashScreenModule,
    HeroSectionModule,
    PageSectionsModule,
  ],
  exports: [
    DashboardComponent,
    ProductListComponent,
    OnboardingComponent,
    ExploreComponent,
    SearchPageComponent
  ],
  providers: [],
})
export class PagesModule {}
