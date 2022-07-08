import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { TextboxQuestion } from '../models/question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'description',
        label: 'Description',
        value: undefined,
        required: false,
        order: 1
      }),

      new TextboxQuestion({
        key: 'costumeType',
        label: 'Costume type',
        type: 'select',
        order: 2
      }),

      new TextboxQuestion({
        key: 'catalogueNumber',
        label: 'Catalogue number',
        order: 3
      }),

      new TextboxQuestion({
        key: 'quantity',
        label: 'Quantity',
        type: 'number',
        order: 4
      }),

      new TextboxQuestion({
        key: 'notes',
        label: 'Notes',
        type: '',
        order: 5
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}