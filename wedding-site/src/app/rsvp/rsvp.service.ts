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

  getRsvpList() {
    const myCollection = collection(this.firestore, 'rsvps');
    const items = collectionData(myCollection) as Observable<Rsvp[]>;

    return items;
  }

  async createRsvp(rsvp: Rsvp) {
    rsvp.dateSubmitted = new Date();
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'rsvps'), rsvp);
    console.log(docRef.id);
  }

  async addSong(songName: string) {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'songs'), { name: songName });
    console.log(docRef.id);
  }
}
