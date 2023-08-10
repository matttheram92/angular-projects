import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Costume, CostumeSizeModel } from '../../models/costume';
import { CostumeService } from '../../services/costume-service';

@Component({
  selector: 'app-check-out-dialog',
  templateUrl: './check-out-dialog.component.html',
  styleUrls: ['./check-out-dialog.component.css']
})
export class CheckOutDialogComponent implements OnInit {
  checkedOutBy: string = '';
  checkedSizes: CostumeSizeModel[] = [];

  constructor(
    public dialogRef: MatDialogRef<CheckOutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { costume: Costume },
    public costumeService: CostumeService
  ) { }

  ngOnInit(): void { }

  get sizes(): CostumeSizeModel[] {
    return this.data.costume.uniqueSizes;
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
    await this.costumeService.updateCostumeSizes(this.data.costume.id, checkedSizeIds, this.checkedOutBy);
    this.dialogRef.close();
    window.location.reload();
  }

  public costumeSizeLabel(costumeSize: CostumeSizeModel): string {
    return costumeSize.checkedOutBy === '' ? costumeSize.name : `${costumeSize.name} (checked out by ${costumeSize.checkedOutBy})`;
  }

}
