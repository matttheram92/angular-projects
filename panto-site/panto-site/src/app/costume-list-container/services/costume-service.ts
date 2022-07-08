import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

@Injectable()
export class CostumeService {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async getCostumes(): Promise<any[]> {
    const costumes: any[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'costumes'));
    querySnapshot.forEach((doc) => {
      costumes.push(doc.data());
    });

    return costumes;
  }

  async getImageUrl(fileName: string): Promise<string> {
    let imageUrl = '';
    const storage = getStorage();
    const storageRef = ref(storage, `costumes/${fileName}`);

    await getDownloadURL(storageRef).then((url) => {
      imageUrl = url;
    });

    return imageUrl;
  }
}
