import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import {
  Costume,
  CostumeFilters,
  CostumeModel,
  CostumeSize,
  CostumeSizeModel,
} from '../models/costume';

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

      if (
        this.costumeMatchesFilteredSize(costumeModel, filters) ||
        (filters?.description !== '' && costumeModel.description.toLowerCase().includes(filters?.description.toLowerCase() || ''))
      ) {
        const costume = new Costume(costumeModel, doc.id);
        costume.imageUrl = await this.getImageUrl(costumeModel.imageName);
        costumes.push(costume);
        costumes.sort((a, b) =>
          CostumeService.sortBySplitChar(
            a.catalogueNo.toString(),
            b.catalogueNo.toString(),
            '.'
          )
        );
      }
    });

    return costumes;
  }

  private costumeMatchesFilteredSize(
    costume: CostumeModel,
    filters?: CostumeFilters
  ): boolean {
    if (!filters || filters.sizes.length === 0) {
      return true;
    }

    const filteredBySize = [];
    costume.quantity.forEach((x) => {
      if (filters.sizes.includes(x.name)) {
        filteredBySize.push(x.name);
        return;
      }
    });

    if (filteredBySize.length === 0) {
      return false;
    }

    return true;
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
        if (filters.sizes.findIndex((x) => x === size.name) === -1) {
          filters.sizes.push(size.name);
        }
      });
    });

    filters.sizes.sort(this.sortSizes);

    return filters;
  }

  private sortSizes(a: string, b: string): number {
    if (a.includes('-') && b.includes('-')) {
      return CostumeService.sortBySplitChar(a, b, '-');
    }

    if (a.includes('-') && !b.includes('-')) {
      return -1;
    }

    if (b.includes('-') && !a.includes('-')) {
      return 1;
    }

    return CostumeService.sortBySplitChar(a, b, '"');
  }

  private static sortBySplitChar(
    a: string,
    b: string,
    splitByChar: string
  ): number {
    const nameA1 = Number(a.substring(0, a.indexOf(splitByChar)));
    const nameB1 = Number(b.substring(0, b.indexOf(splitByChar)));

    if (nameA1 < nameB1) {
      return -1;
    }

    if (nameA1 > nameB1) {
      return 1;
    }

    if (splitByChar === '"') {
      return 0;
    }

    const nameA2 = Number(a.substring(a.indexOf(splitByChar) + 1, a.length));
    const nameB2 = Number(b.substring(b.indexOf(splitByChar) + 1, b.length));

    if (nameA2 < nameB2) {
      return -1;
    }

    if (nameA2 > nameB2) {
      return 1;
    }

    return 0;
  }

  async getImageUrl(fileName: string): Promise<string> {
    if (fileName === '') {
      return '';
    }

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
  }

  async updateCostumeSizes(
    costumeId: string,
    checkedOutSizeIds: string[],
    checkedOutBy: string
  ): Promise<void> {
    const db = getFirestore();
    const costumeToUpdateDoc = doc(db, 'costumes', costumeId);
    const costumeToUpdateData = await getDoc(costumeToUpdateDoc);
    const costumeToUpdate = costumeToUpdateData.data() as CostumeModel;

    costumeToUpdate.quantity.forEach((size) => {
      if (checkedOutSizeIds.includes(size.id)) {
        size.checkedOutBy = checkedOutBy;
      }
    });

    await updateDoc(costumeToUpdateDoc, {
      quantity: costumeToUpdate.quantity,
    });
  }

  async deleteCostume(costumeId: string): Promise<void> {
    const db = getFirestore();
    await deleteDoc(doc(db, 'costumes', costumeId));
  }
}
