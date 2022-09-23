import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {}

  async selectFile(event: any): Promise<void> {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.currentFileUpload.url = await this.uploadService.pushFileToStorage(
          this.currentFileUpload
        );
        this._emitChange();
      }
    }
  }

  private _emitChange(): void {
    this.uploaded.emit(this.currentFileUpload?.name);
  }
}
