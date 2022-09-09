import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { Costume, CostumeFilters, CostumeModel } from '../models/costume';

@Injectable()
export class CostumeService {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async getCostumes(filters?: CostumeFilters): Promise<Costume[]> {
    const costumes: Costume[] = [];

    const ref = collection(this.firestore, 'costumes');
    const queryConstraints = [];

    if (filters && filters.colours.length > 0) {
      queryConstraints.push(
        where('colours', 'array-contains-any', filters.colours)
      );
    }

    if (filters && filters.types.length > 0) {
      queryConstraints.push(where('type', 'in', filters.types));
    }

    const q = query(ref, ...queryConstraints);

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      const costumeModel = doc.data() as CostumeModel;
      const costume = new Costume(costumeModel);
      costume.imageUrl = await this.getImageUrl(costumeModel.imageName);
      costumes.push(costume);
    });

    costumes.sort((a, b) => a.catalogueNo + b.catalogueNo);
    return costumes;
  }

  async getCostumeFilters(): Promise<CostumeFilters> {
    const filters: CostumeFilters = new CostumeFilters();

    const q = query(collection(this.firestore, 'costumes'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      const costumeModel = doc.data() as CostumeModel;
      costumeModel.colours.forEach((colour) => {
        if (filters.colours.findIndex((x) => x === colour) === -1) {
          filters.colours.push(colour);
        }
      });

      if (filters.types.findIndex((x) => x === costumeModel.type) === -1) {
        filters.types.push(costumeModel.type);
      }

      costumeModel.quantity.forEach((size) => {
        if (filters.sizes.findIndex((x) => x === size) === -1) {
          filters.sizes.push(size);
        }
      });
    });

    filters.sizes.sort(this.sortSizes);

    return filters;
  }

  private sortSizes(a: string, b: string): number {
    const nameA1 = Number(a.substring(0, a.indexOf('-')));
    const nameB1 = Number(b.substring(0, b.indexOf('-')));

    if (nameA1 < nameB1) {
      return -1;
    }

    if (nameA1 > nameB1) {
      return 1;
    }

    const nameA2 = Number(a.substring(a.indexOf('-') + 1, a.length));
    const nameB2 = Number(b.substring(b.indexOf('-') + 1, b.length));

    if (nameA2 < nameB2) {
      return -1;
    }

    if (nameA2 > nameB2) {
      return 1;
    }

    return 0;
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

  async createCostume(costume: CostumeModel) {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'costumes'), costume);
    console.log(docRef.id);
  }
}
