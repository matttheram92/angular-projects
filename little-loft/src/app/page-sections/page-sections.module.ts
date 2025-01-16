import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { ControlsModule } from '../controls/contols.module';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from '../icons/icons.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreModule } from '@app/core/core.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { TypeographyModule } from '@app/typography/typography.module';

@NgModule({
  declarations: [
    CarouselComponent,
    SearchSectionComponent,
    DashboardComponent,
    ItemListComponent,
  ],
  imports: [
    ControlsModule,
    BrowserModule,
    IconsModule,
    CoreModule,
    TypeographyModule,
  ],
  exports: [
    CarouselComponent,
    SearchSectionComponent,
    DashboardComponent,
    ItemListComponent,
  ],
  providers: [],
})
export class PageSectionsModule {}
