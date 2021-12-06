import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from '@firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wedding-site';
  loggedIn = false;
  password= '';
  firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async logIn() {
    const docRef = doc(this.firestore, "data", this.password);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.loggedIn = true;
    } else {
      console.log("Invalid password");
    }
  }
}
