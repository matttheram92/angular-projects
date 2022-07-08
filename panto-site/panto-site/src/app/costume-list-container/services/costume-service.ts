import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { Costume, CostumeModel } from '../models/costume';

@Injectable()
export class CostumeService {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async getCostumes(): Promise<Costume[]> {
    const costumes: Costume[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'costumes'));
    querySnapshot.forEach(async (doc) => {
      const costumeModel = doc.data() as CostumeModel;
      const costume = new Costume(costumeModel);
      costume.imageUrl = await this.getImageUrl(costumeModel.imageName);
      costumes.push(costume);
    });

    console.log(costumes);
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
