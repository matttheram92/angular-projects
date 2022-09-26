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

}
