import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { QuestionBase } from '../../models/question-base';
import { QuestionService } from '../../services/question-service';

@Component({
  selector: 'app-dynamic-form-dialog',
  templateUrl: './dynamic-form-dialog.component.html',
  styleUrls: ['./dynamic-form-dialog.component.css'],
  providers:  [QuestionService]
})
export class DynamicFormDialogComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(public dialogRef: MatDialogRef<DynamicFormDialogComponent>, service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
