import { Injectable } from '@angular/core';
import { Firestore, getDocsFromCache } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  endBefore,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  limitToLast,
  orderBy,
  Query,
  query,
  setDoc,
  startAfter,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { Costume, CostumeFilters, CostumeModel } from '../models/costume';

//const COSTUME_COLLECTION = 'costumes-dev';
const COSTUME_COLLECTION = 'costumes';

@Injectable()
export class CostumeService {
  private firestore: Firestore;
  private firstVisible!: any;
  private lastVisible!: any;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async getCostumes(
    filters?: CostumeFilters,
    next?: boolean,
    prev?: boolean
  ): Promise<Costume[]> {
    const costumes: Costume[] = [];

    const ref = collection(this.firestore, COSTUME_COLLECTION);
    const queryConstraints = [];

    if (filters && filters.colours.length > 0) {
      queryConstraints.push(
        where('colours', 'array-contains-any', filters.colours)
      );
    }

    if (filters && filters.types.length > 0) {
      queryConstraints.push(where('type', 'in', filters.types));
    }

    let q: any;
    if ((!next && !prev) || (!this.firstVisible && !this.lastVisible)) {
      q = query(ref, ...queryConstraints, orderBy('sortableCatNo'), limit(8));
    } else if (next) {
      q = query(
        ref,
        ...queryConstraints,
        orderBy('sortableCatNo'),
        startAfter(this.lastVisible),
        limit(8)
      );
    } else if (prev) {
      q = query(
        ref,
        ...queryConstraints,
        orderBy('sortableCatNo'),
        endBefore(this.firstVisible),
        limitToLast(8)
      );
    }

    const querySnapshot = await this.tryGetDocsFromCache(q);

    if (querySnapshot.empty) {
      this.firstVisible = null;
      this.lastVisible = null;
      return costumes;
    }

    this.firstVisible = querySnapshot.docs[0];
    this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    querySnapshot.forEach(async (doc) => {
      const costumeModel = doc.data() as CostumeModel;
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
    });

    return costumes;
  }

  async getCostumesWithLocalFilters(
    filters?: CostumeFilters,
    next?: boolean,
    prev?: boolean
  ): Promise<Costume[]> {
    let costumes: Costume[] = [];

    const ref = collection(this.firestore, COSTUME_COLLECTION);
    const queryConstraints = [];

    if (filters && filters.colours.length > 0) {
      queryConstraints.push(
        where('colours', 'array-contains-any', filters.colours)
      );
    }

    if (filters && filters.types.length > 0) {
      queryConstraints.push(where('type', 'in', filters.types));
    }

    const q = query(ref, ...queryConstraints, orderBy('sortableCatNo'));
    let querySnapshot = await this.tryGetDocsFromCache(q);

    querySnapshot.forEach((doc) => {
      const costumeModel = doc.data() as CostumeModel;
      if (
        this.costumeMatchesFilteredSize(costumeModel, filters) ||
        (filters?.description !== '' &&
          costumeModel.description
            .toLowerCase()
            .includes(filters?.description.toLowerCase() ?? ''))
      ) {
        const costume = new Costume(costumeModel, doc.id);
        costumes.sort((a, b) =>
          CostumeService.sortBySplitChar(
            a.catalogueNo.toString(),
            b.catalogueNo.toString(),
            '.'
          )
        );
        costumes.push(costume);
      }
    });

    if (next) {
      const lastVisibleIndex = costumes.findIndex(
        (x) => x.id === this.lastVisible.id
      );
      costumes = costumes.slice(lastVisibleIndex + 1, lastVisibleIndex + 9);
    } else if (prev) {
      const firstVisibleIndex = costumes.findIndex(
        (x) => x.id === this.firstVisible.id
      );
      if (firstVisibleIndex - 8 > -1) {
        costumes = costumes.slice(firstVisibleIndex - 8, firstVisibleIndex);
      } else {
        costumes = costumes.slice(0, 8);
      }
    } else {
      costumes = costumes.slice(0, 8);
    }

    const trimmedCostumes: Costume[] = [];
    costumes.forEach(async (costume, index) => {
      this.getImageUrl(costume.imageName).then((url) => {
        costume.imageUrl = url;

        trimmedCostumes.push(costume);
        trimmedCostumes.sort((a, b) =>
          CostumeService.sortBySplitChar(
            a.catalogueNo.toString(),
            b.catalogueNo.toString(),
            '.'
          )
        );

        if (index === 0) {
          this.firstVisible = costume;
        } else if (index === 7) {
          this.lastVisible = costume;
        }
      });
    });

    return trimmedCostumes;
  }

  private async tryGetDocsFromCache(q: Query<DocumentData>) {
    let querySnapshot;
    try {
      querySnapshot = await getDocsFromCache(q);
      if (querySnapshot.empty) {
        querySnapshot = await getDocs(q);
      }
    } catch (e) {
      querySnapshot = await getDocs(q);
    }
    return querySnapshot;
  }

  private costumeMatchesFilteredSize(
    costume: CostumeModel,
    filters?: CostumeFilters
  ): boolean {
    if (!filters || filters.sizes.length === 0) {
      if (filters?.description !== '') {
        return false;
      }
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

    const q = query(collection(this.firestore, COSTUME_COLLECTION));
    const querySnapshot = await this.tryGetDocsFromCache(q);

    querySnapshot.forEach(async (doc) => {
      const costumeModel = doc.data() as CostumeModel;

      for (const colour of costumeModel.colours) {
        if (filters.colours.findIndex((x) => x === colour) === -1) {
          filters.colours.push(colour);
        }
      }

      if (filters.types.findIndex((x) => x === costumeModel.type) === -1) {
        filters.types.push(costumeModel.type);
      }

      for (const size of costumeModel.quantity) {
        if (filters.sizes.findIndex((x) => x === size.name) === -1) {
          filters.sizes.push(size.name);
        }
      }
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
    const docRef = await addDoc(collection(db, COSTUME_COLLECTION), costume);
  }

  async updateCostumeSizes(
    costumeId: string,
    checkedOutSizeIds: string[],
    checkedOutBy: string
  ): Promise<void> {
    const db = getFirestore();
    const costumeToUpdateDoc = doc(db, COSTUME_COLLECTION, costumeId);
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
    await deleteDoc(doc(db, COSTUME_COLLECTION, costumeId));
  }

  async editCostume(id: string, costume: CostumeModel): Promise<void> {
    const db = getFirestore();
    await setDoc(doc(db, COSTUME_COLLECTION, id), {
      catalogueNo: costume.catalogueNo,
      colours: costume.colours,
      description: costume.description,
      imageName: costume.imageName,
      notes: costume.notes,
      quantity: costume.quantity,
      type: costume.type,
      sortableCatNo: costume.sortableCatNo,
    });
  }
}
