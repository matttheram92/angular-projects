import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from '@firebase/firestore';

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
  password= '';
  firestore: Firestore;

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
    const docRef = doc(this.firestore, "data", this.password);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const accessLevel = docSnap.data().value;
      sessionStorage.setItem("access", accessLevel.toString());
      this.loggedIn = true;
    } else {
      console.log("Invalid password");
    }
  }
}
