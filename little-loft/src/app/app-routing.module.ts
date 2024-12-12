import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { ProductListComponent } from './pages/components/product-list/product-list.component';
import { OnboardingComponent } from './pages/components/onboarding/onboarding.component';
import { ExploreComponent } from './pages/components/explore/explore.component';
import { SearchPageComponent } from './pages/components/search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'sell', component: OnboardingComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'search', component: SearchPageComponent },
  //{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
