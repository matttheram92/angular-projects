import { NgModule } from '@angular/core';
import { OptionsListComponent } from './components/options-list/options-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [OptionsListComponent, ButtonComponent],
  imports: [BrowserModule, IconsModule],
  exports: [OptionsListComponent, ButtonComponent],
  providers: [],
  bootstrap: [],
})
export class ControlsModule {}
