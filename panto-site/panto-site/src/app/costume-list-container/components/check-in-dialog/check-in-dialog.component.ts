import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Costume, CostumeSizeModel } from '../../models/costume';
import { CostumeService } from '../../services/costume-service';

@Component({
  selector: 'app-check-in-dialog',
  templateUrl: './check-in-dialog.component.html',
  styleUrls: ['./check-in-dialog.component.css']
})
export class CheckInDialogComponent implements OnInit {
  checkedSizes: CostumeSizeModel[] = [];

  constructor(
    public dialogRef: MatDialogRef<CheckInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { costume: Costume },
    public costumeService: CostumeService
  ) { }

  ngOnInit(): void {
  }

  get sizes(): CostumeSizeModel[] {
    return this.data.costume.uniqueSizes.filter(size => size.checkedOutBy !== '');
  }

  public sizeChecked(size: CostumeSizeModel): void {
    const index = this.checkedSizes.findIndex((x) => x.id === size.id);
    if (index >= 0) {
      this.checkedSizes.splice(index, 1);
    } else {
      this.checkedSizes.push(size);
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

  public async save(): Promise<void> {
    const checkedSizeIds = this.checkedSizes.map(size => size.id);
    await this.costumeService.updateCostumeSizes(this.data.costume.id, checkedSizeIds, '');
    this.dialogRef.close();
    window.location.reload();
  }

  public costumeSizeLabel(costumeSize: CostumeSizeModel): string {
    return costumeSize.checkedOutBy === '' ? costumeSize.name : `${costumeSize.name} (checked out by ${costumeSize.checkedOutBy})`;
  }

}
