import { Injectable } from '@angular/core';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Rsvp } from './rsvp.model';

@Injectable({
  providedIn: 'root',
})

export class RsvpService {
  firestore: Firestore;
  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  // getRsvp(id: string) {
  //   const myCollection = collection(this.firestore, 'rsvps')
  //   const items = collectionData(myCollection) as Observable<Rsvp[]>;

  //   return items;
  // }

  getRsvpList() {
    const myCollection = collection(this.firestore, 'rsvps');
    const items = collectionData(myCollection) as Observable<Rsvp[]>;

    return items;
  }

  async createRsvp(rsvp: Rsvp) {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'rsvps'), rsvp);
    console.log(docRef.id);
    // return new Promise<any>((resolve, reject) => {
    //   this.angularFirestore
    //     .collection('rsvp')
    //     .add(rsvp)
    //     .then(
    //       (response) => {
    //         console.log(response);
    //       },
    //       (error) => reject(error)
    //     );
    // });
  }

  // deleteUser(user) {
  //   return this.angularFirestore
  //     .collection("user-collection")
  //     .doc(user.id)
  //     .delete();
  // }

  // updateUser(user: User, id) {
  //   return this.angularFirestore
  //     .collection("user-collection")
  //     .doc(id)
  //     .update({
  //       name: user.name,
  //       email: user.email,
  //       contact: user.contact
  //     });
  // }
}
