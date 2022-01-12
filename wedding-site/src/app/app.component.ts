import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { doc, getDoc } from '@firebase/firestore';
import { DocumentData, DocumentReference } from 'rxfire/firestore/interfaces';
import { AccessLevel, getAccessLevelFromString } from './access-level';

const eveningAccess = "evening-access";
const fullAccess = "fullAccess";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wedding-site';
  loggedIn = false;
  password = '';
  incorrectPassword = false;
  loading = false;
  firestore: Firestore;
  accessLevel: AccessLevel = AccessLevel.NoAccess;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  ngOnInit(): void {
    const userAccessLevel = sessionStorage.getItem("access");
    if (userAccessLevel && (userAccessLevel === eveningAccess || userAccessLevel === fullAccess)) {
      this.loggedIn = true;
    }
  }

  async logIn() {
    this.loading = true;
    let docRef: DocumentReference<DocumentData>;

    try {
      docRef = doc(this.firestore, "data", this.password);
    }
    catch {
      this.showIncorrectPasswordMessage();
      return;
    }

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const accessLevel: string = docSnap.data().value;
      sessionStorage.setItem("access", accessLevel.toString());
      this.accessLevel = getAccessLevelFromString(accessLevel);
      this.loading = false;
      this.loggedIn = true;
    } else {
      this.showIncorrectPasswordMessage();
    }
  }

  showIncorrectPasswordMessage(): void {
    const self = this;
    setTimeout(function () {
      self.loading = false;
      self.incorrectPassword = true;
    }, 2000);
  }
}
