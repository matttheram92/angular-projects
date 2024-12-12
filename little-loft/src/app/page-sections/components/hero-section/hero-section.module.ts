import { NgModule } from '@angular/core';
import { HeroSectionHalfAndHalfComponent } from './hero-section-half-and-half/hero-section-half-and-half.component';
import { HeroSectionWithImageComponent } from './hero-section-with-image/hero-section-with-image.component';
import { HeroSectionWithShapesComponent } from './hero-section-with-shapes/hero-section-with-shapes.component';
import { ControlsModule } from 'src/app/controls/contols.module';

@NgModule({
  declarations: [
    HeroSectionHalfAndHalfComponent,
    HeroSectionWithImageComponent,
    HeroSectionWithShapesComponent,
  ],
  imports: [ControlsModule],
  exports: [
    HeroSectionHalfAndHalfComponent,
    HeroSectionWithImageComponent,
    HeroSectionWithShapesComponent,
  ],
  providers: [],
})
export class HeroSectionModule {}
