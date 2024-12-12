import { NgModule } from '@angular/core';
import { OptionsListComponent } from './components/options-list/options-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { IconsModule } from '../icons/icons.module';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [OptionsListComponent, ButtonComponent, InputComponent],
  imports: [BrowserModule, IconsModule],
  exports: [OptionsListComponent, ButtonComponent, InputComponent],
  providers: [],
  bootstrap: [],
})
export class ControlsModule {}
