import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigateToDirective } from './directives/navigate-to.directive';

@NgModule({
  declarations: [NavigateToDirective],
  imports: [CommonModule],
  exports: [NavigateToDirective],
})
export class CoreModule {}
