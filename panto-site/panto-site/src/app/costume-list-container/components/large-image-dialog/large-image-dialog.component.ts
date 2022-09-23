import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Costume } from '../../models/costume';

@Component({
  selector: 'app-large-image-dialog',
  templateUrl: './large-image-dialog.component.html',
  styleUrls: ['./large-image-dialog.component.css']
})
export class LargeImageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LargeImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { costume: Costume },) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close();
  }

}
