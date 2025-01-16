import { NgModule } from '@angular/core';
import { IconComponent } from './icon/icon.component';
import { SafeHtmlPipe } from './services/safe-html.pipe';

@NgModule({
  declarations: [IconComponent, SafeHtmlPipe],
  exports: [IconComponent],
  providers: [],
  bootstrap: [],
})
export class IconsModule {}
