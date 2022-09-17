import { Injectable } from '@angular/core';
import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref,
  StorageError,
  uploadBytesResumable,
} from 'firebase/storage';

import { FileUpload } from '../models/file-upload.model';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private basePath = '/costumes';

  constructor() {}

  ngOnInit(): void {}

  async pushFileToStorage(fileUpload: FileUpload): Promise<string> {
    const storage = getStorage();
    const filePath = `${this.basePath}/${fileUpload.name}`;
    const storageRef = ref(storage, filePath);
    const uploadTask = await uploadBytesResumable(storageRef, fileUpload.file);
    const url = await getDownloadURL(uploadTask.ref);
    return url;
  }

  // private saveFileData(fileUpload: FileUpload): void {
  //   this.db.list(this.basePath).push(fileUpload);
  // }

  // getFiles(numberItems: number): AngularFireList<FileUpload> {
  //   return this.db.list(this.basePath, ref =>
  //     ref.limitToLast(numberItems));
  // }

  // deleteFile(fileUpload: FileUpload): void {
  //   this.deleteFileDatabase(fileUpload.key)
  //     .then(() => {
  //       this.deleteFileStorage(fileUpload.name);
  //     })
  //     .catch(error => console.log(error));
  // }

  // private deleteFileDatabase(key: string): Promise<void> {
  //   return this.db.list(this.basePath).remove(key);
  // }

  // private deleteFileStorage(name: string): void {
  //   const storageRef = this.storage.ref(this.basePath);
  //   storageRef.child(name).delete();
  // }
}
