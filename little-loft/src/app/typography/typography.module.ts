import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core/core.module';
import { SmallTextComponent } from './components/small-text/small-text.component';
import { EyebrowComponent } from './components/eyebrow/eyebrow.component';
import { BodyComponent } from './components/body/body.component';
import { Heading5Component } from './components/heading5/heading5.component';
import { Heading4Component } from './components/heading4/heading4.component';
import { Heading3Component } from './components/heading3/heading3.component';
import { Heading2Component } from './components/heading2/heading2.component';
import { Heading1Component } from './components/heading1/heading1.component';

@NgModule({
  declarations: [
    Heading1Component,
    Heading2Component,
    Heading3Component,
    Heading4Component,
    Heading5Component,
    BodyComponent,
    EyebrowComponent,
    SmallTextComponent,
  ],
  imports: [BrowserModule, CoreModule],
  exports: [
    Heading1Component,
    Heading2Component,
    Heading3Component,
    Heading4Component,
    Heading5Component,
    BodyComponent,
    EyebrowComponent,
    SmallTextComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class TypeographyModule {}
