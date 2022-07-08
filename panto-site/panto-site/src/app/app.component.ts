import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { QuestionBase } from './dynamic-form/models/question-base';
import { QuestionService } from './dynamic-form/services/question-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [QuestionService]
})
export class AppComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {}
}