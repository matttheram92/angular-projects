import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { FileUpload } from './models/file-upload.model';
import { FileUploadService } from './services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Output()
  public uploaded: EventEmitter<any> = new EventEmitter<any>();

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;

  file?: any;

  constructor(
    private uploadService: FileUploadService,
    private imageCompress: NgxImageCompressService
  ) {}

  ngOnInit(): void {}

  private _emitChange(): void {
    this.uploaded.emit(this.currentFileUpload?.name);
  }

  public selectFile(event: any) {
    var fileName: any;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.compressFile(event.target.result, fileName);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  private compressFile(image: string, fileName: string) {
    var orientation = -1;

    this.imageCompress
      .compressFile(image, orientation, 50, 50)
      .then((result) => {
        const imageName = fileName;
        const imageFile = new File([result], imageName, { type: 'image/jpeg' });
        this.uploadFile(imageFile, result);
      });
  }

  private async uploadFile(file: File, message: string): Promise<void> {
    this.currentFileUpload = new FileUpload(file);
    this.currentFileUpload.url = await this.uploadService.pushFileToStorage(
      this.currentFileUpload,
      message
    );
    this._emitChange();
  }
}
