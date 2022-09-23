import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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

  constructor(
    public dialogRef: MatDialogRef<DynamicFormDialogComponent>,
    private questionService: QuestionService,
    private costumeService: CostumeService
  ) {
    this.questions = this.questionService.getQuestions([], []);
  }

  async ngOnInit(): Promise<void> {
    const costumeFilters = await this.costumeService.getCostumeFilters();
    const costumeColours = costumeFilters.colours.map((colour) => {
      return { key: colour, value: colour };
    });
    const costumeTypes = costumeFilters.types.map((type) => {
      return { key: type, value: type };
    });

    this.questions = this.questionService.getQuestions(costumeColours, costumeTypes);
  }
}
