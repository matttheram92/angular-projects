import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rsvp } from '../rsvp/rsvp.model';

@Component({
    selector: 'confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Rsvp,
    ) { }

    onYesClick(): void {
        this.dialogRef.close(true);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
