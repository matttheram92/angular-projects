import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Costume } from '../../models/costume';
import { CheckOutDialogComponent } from '../check-out-dialog/check-out-dialog.component';

@Component({
  selector: 'app-large-image-dialog',
  templateUrl: './large-image-dialog.component.html',
  styleUrls: ['./large-image-dialog.component.css']
})
export class LargeImageDialogComponent implements OnInit {
  checkOutHover: string = '';
  showInfo: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<LargeImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { costume: Costume },
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  get costume(): Costume {
    return this.data.costume;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public openCheckOutDialog(costume: Costume): void {
    this.dialogRef.close();
    this.dialog.open(CheckOutDialogComponent, {
      width: '500px',
      data: {
        costume: costume,
      },
    });
  }

  // public selectFile(event: any) {
  //   var fileName: any;
  //   const file = event.target.files[0];
  //   fileName = file['name'];
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.compressFile(event.target.result, fileName);
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  // private compressFile(image: string, fileName: string) {
  //   var orientation = -1;

  //   this.imageCompress
  //     .compressFile(image, orientation, 50, 50)
  //     .then((result) => {
  //       const imageName = fileName;
  //       const imageFile = new File([result], imageName, { type: 'image/jpeg' });
  //       this.uploadFile(imageFile, result);
  //     });
  // }

  // private async uploadFile(file: File, message: string): Promise<void> {
  //   const fileName = `${file.name.substring(0, file.name.indexOf('.jpg'))}.JPEG`;
  //   const currentFileUpload: FileUpload = { file: file, name: fileName, key: Guid.create(), url: '' };
  //   await this.uploadService.deleteFileFromStorage(currentFileUpload);
  //   currentFileUpload.url = await this.uploadService.pushFileToStorage(
  //     currentFileUpload,
  //     message
  //   );
  // }

}
