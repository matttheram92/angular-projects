import { Guid } from 'guid-typescript';

export class FileUpload {
    key!: Guid;
    name!: string;
    file!: File;
    url!: string;
  
    constructor(file: File) {
      const splitFileName = file.name.split('.');
      const fileExtension = splitFileName[splitFileName.length-1];

      this.key = Guid.create();
      this.name = `${this.key}.${fileExtension}`;
      this.file = file;
    }
  }