import { NgModule } from '@angular/core';

import { PageSectionsModule } from '../page-sections/page-sections.module';
import { HeaderComponent } from './components/header/header.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { MobileNavButtonComponent } from './components/mobile-nav/mobile-nav-button/mobile-nav-button.component';
import { IconsModule } from '../icons/icons.module';
import { BrowserModule } from '@angular/platform-browser';
import { ControlsModule } from '../controls/contols.module';

@NgModule({
  declarations: [HeaderComponent, MobileNavComponent, MobileNavButtonComponent],
  imports: [PageSectionsModule, IconsModule, BrowserModule, ControlsModule],
  exports: [HeaderComponent, MobileNavComponent],
  providers: [],
  bootstrap: [],
})
export class NavigationModule {}
