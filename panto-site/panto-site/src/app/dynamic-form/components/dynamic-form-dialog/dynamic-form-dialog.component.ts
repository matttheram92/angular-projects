import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Costume } from 'src/app/costume-list-container/models/costume';
import { CostumeService } from 'src/app/costume-list-container/services/costume-service';
import { QuestionBase } from '../../models/question-base';
import { QuestionService } from '../../services/question-service';

@Component({
  selector: 'app-dynamic-form-dialog',
  templateUrl: './dynamic-form-dialog.component.html',
  styleUrls: ['./dynamic-form-dialog.component.css'],
  providers: [QuestionService, CostumeService],
})
export class DynamicFormDialogComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  loaded = false;

  constructor(
    public dialogRef: MatDialogRef<DynamicFormDialogComponent>,
    private questionService: QuestionService,
    private costumeService: CostumeService,
    @Inject(MAT_DIALOG_DATA) public data: { costumeToEdit: Costume }
  ) {
    this.questions = this.questionService.getQuestions([], []);
  }

  async ngOnInit(): Promise<void> {
    const costumeFilters = await this.costumeService.getCostumeFilters();
    const costumeColours = costumeFilters.colours.map((colour) => {
      return { key: colour.label, value: colour.label };
    });
    const costumeTypes = costumeFilters.types.map((type) => {
      return { key: type.label, value: type.label };
    });

    this.questions = this.questionService.getQuestions(
      costumeColours,
      costumeTypes,
      this.data?.costumeToEdit
    );

    this.loaded = true;
  }
}
