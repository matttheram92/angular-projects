import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { QuestionBase } from './dynamic-form/models/question-base';
import { QuestionService } from './dynamic-form/services/question-service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}