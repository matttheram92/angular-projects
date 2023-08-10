import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Costume, CostumeSizeModel } from '../../models/costume';
import { CostumeService } from '../../services/costume-service';
import { QuestionBase } from 'src/app/dynamic-form/models/question-base';
import { TextboxQuestion } from 'src/app/dynamic-form/models/question-types';

@Component({
  selector: 'app-folder-dialog',
  templateUrl: './folder-dialog.component.html',
  styleUrls: ['./folder-dialog.component.css'],
})
export class FolderDialogComponent implements OnInit {
  checkedOutBy: string = '';
  checkedSizes: CostumeSizeModel[] = [];
  questions: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'folder',
      label: 'Folder',
      value: this.data.costume?.folder,
      type: 'select',
      order: 0,
      controlType: 'inputDropdownSingle',
      options: this.data.folders.map((f) => {
        return { key: f, value: f };
      }),
    }),
  ];

  constructor(
    public dialogRef: MatDialogRef<FolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { costume: Costume; folders: string[] },
    public costumeService: CostumeService
  ) {}

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }
}
