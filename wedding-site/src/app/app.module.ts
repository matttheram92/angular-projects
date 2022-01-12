import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopImageComponent } from './top-image/top-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridContentComponent } from './grid-content/grid-content.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { CreateRsvpComponent } from './create-rsvp/create-rsvp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RsvpService } from './rsvp/rsvp.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SongRequestsComponent } from './song-requests/song-requests.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TopImageComponent,
    GridContentComponent,
    FooterContentComponent,
    CreateRsvpComponent,
    ConfirmDialogComponent,
    SongRequestsComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  providers: [RsvpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
