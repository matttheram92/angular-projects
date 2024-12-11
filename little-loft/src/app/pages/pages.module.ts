import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SplashScreenModule } from '../page-sections/components/splash-screen/splash-screen.module';
import { HeroSectionModule } from '../page-sections/components/hero-section/hero-section.module';
import { PageSectionsModule } from '../page-sections/page-sections.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    OnboardingComponent,
    ExploreComponent,
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
  ],
  providers: [],
})
export class PagesModule {}
