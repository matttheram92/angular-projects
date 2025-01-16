import { NgModule } from '@angular/core';
import { OptionsListComponent } from './components/options-list/options-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { IconsModule } from '../icons/icons.module';
import { InputComponent } from './components/input/input.component';
import { HeartButtonComponent } from './components/heart-button/heart-button.component';
import { CoreModule } from '@app/core/core.module';
import { NavigateToDirective } from './directives/navigate-to.directive';

@NgModule({
  declarations: [
    OptionsListComponent,
    ButtonComponent,
    InputComponent,
    HeartButtonComponent,
    NavigateToDirective,
  ],
  imports: [BrowserModule, IconsModule, CoreModule],
  exports: [
    OptionsListComponent,
    ButtonComponent,
    InputComponent,
    HeartButtonComponent,
    NavigateToDirective,
  ],
  providers: [],
  bootstrap: [],
})
export class ControlsModule {}
