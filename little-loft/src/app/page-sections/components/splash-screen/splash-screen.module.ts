import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashWithTextComponent } from './components/splash-with-text/splash-with-text.component';
import { SplashWithTextAndImageComponent } from './components/splash-with-text-and-image/splash-with-text-and-image.component';
import { SplashWithActionComponent } from './components/splash-with-action/splash-with-action.component';
import { SplashScreenComponent } from './components/splash-screen.component';
import { ControlsModule } from 'src/app/controls/contols.module';
import { IconsModule } from '@app/icons/icons.module';

@NgModule({
  declarations: [
    SplashWithTextComponent,
    SplashWithTextAndImageComponent,
    SplashWithActionComponent,
    SplashScreenComponent,
  ],
  imports: [BrowserModule, ControlsModule, IconsModule],
  exports: [SplashScreenComponent],
  providers: [],
})
export class SplashScreenModule {}
