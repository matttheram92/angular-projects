import { Injectable } from '@angular/core';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { addDoc, collection, query, getDocs } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { SongRequest } from '../song-requests/song-requests.model';
import { Rsvp } from './rsvp.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})

export class RsvpService {
  firestore: Firestore;
  currentUser: string = '';
  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.currentUser = '';
  }

  async getRsvpList(): Promise<Rsvp[]> {
    const rsvps: Rsvp[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, "rsvps"));
    querySnapshot.forEach((doc) => {
      rsvps.push(doc.data() as Rsvp)
    });

    return rsvps;
  }

  async getSongList(): Promise<SongRequest[]> {
    const songs: SongRequest[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, "songs"));
    querySnapshot.forEach((doc) => {
      songs.push(doc.data() as SongRequest)
    });

    return songs;
  }

  async createRsvp(rsvp: Rsvp) {
    rsvp.id = uuidv4();
    rsvp.dateSubmitted = new Date();
    this.currentUser = rsvp.name;
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'rsvps'), rsvp);
    console.log(docRef.id);
  }

  async addSong(songName: string) {
    const songRequest: SongRequest = {
      id: uuidv4(),
      songName: songName,
      dateSubmitted: new Date(),
      personName: this.currentUser
    };
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'songs'), songRequest);
    console.log(docRef.id);
  }
}
