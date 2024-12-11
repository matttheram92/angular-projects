import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { ControlsModule } from '../controls/contols.module';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [CarouselComponent, SearchSectionComponent],
  imports: [ControlsModule, BrowserModule, IconsModule],
  exports: [CarouselComponent, SearchSectionComponent],
  providers: [],
})
export class PageSectionsModule {}
