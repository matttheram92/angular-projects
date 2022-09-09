import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { TextboxQuestion } from '../models/question-textbox';

@Injectable()
export class QuestionService {

  getQuestions() {
    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'description',
        label: 'Description',
        value: undefined,
        required: false,
        order: 1,
        controlType: 'textbox'
      }),

      new TextboxQuestion({
        key: 'colour',
        label: 'Colour',
        order: 2,
        controlType: 'inputDropdown'
      }),

      new TextboxQuestion({
        key: 'costumeType',
        label: 'Costume type',
        type: 'select',
        order: 3,
        controlType: 'dropdown',
        options: [{ key: '123', value: '123' }]
      }),

      new TextboxQuestion({
        key: 'catalogueNumber',
        label: 'Catalogue number',
        order: 4,
        controlType: 'textbox'
      }),

      new TextboxQuestion({
        key: 'sizes',
        label: 'Sizes',
        order: 5,
        controlType: 'dualInput'
      }),

      new TextboxQuestion({
        key: 'notes',
        label: 'Notes',
        type: '',
        order: 6,
        controlType: 'textbox'
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}