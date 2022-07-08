import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/components/dynamic-form-question/dynamic-form-question.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CostumeListContainerComponent } from './costume-list-container/costume-list-container.component';
import { CostumeService } from './costume-list-container/services/costume-service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    TopNavComponent,
    CostumeListContainerComponent,
  ],
  providers: [CostumeService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
