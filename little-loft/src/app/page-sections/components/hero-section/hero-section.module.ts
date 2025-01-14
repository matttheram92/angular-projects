import { NgModule } from '@angular/core';
import { HeroSectionHalfAndHalfComponent } from './hero-section-half-and-half/hero-section-half-and-half.component';
import { HeroSectionWithImageComponent } from './hero-section-with-image/hero-section-with-image.component';
import { HeroSectionWithShapesComponent } from './hero-section-with-shapes/hero-section-with-shapes.component';
import { HeroSectionWithCardsComponent } from './hero-section-with-cards/hero-section-with-cards.component';
import { ControlsModule } from 'src/app/controls/contols.module';
import { IconsModule } from '@app/icons/icons.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroSectionHalfAndHalfComponent,
    HeroSectionWithImageComponent,
    HeroSectionWithShapesComponent,
    HeroSectionWithCardsComponent,
  ],
  imports: [ControlsModule, IconsModule, CommonModule],
  exports: [
    HeroSectionHalfAndHalfComponent,
    HeroSectionWithImageComponent,
    HeroSectionWithShapesComponent,
    HeroSectionWithCardsComponent,
  ],
  providers: [],
})
export class HeroSectionModule {}
