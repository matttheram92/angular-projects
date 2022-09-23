import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { TextboxQuestion } from '../models/question-textbox';

@Injectable()
export class QuestionService {
  public getQuestions(
    colours: { key: string; value: string }[],
    costumeTypes: { key: string; value: string }[],
  ): QuestionBase<string>[] {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'description',
        label: 'Description',
        value: undefined,
        required: false,
        order: 1,
        controlType: 'textbox',
      }),

      new TextboxQuestion({
        key: 'colour',
        label: 'Colours',
        order: 2,
        controlType: 'inputDropdown',
        options: colours,
      }),

      new TextboxQuestion({
        key: 'costumeType',
        label: 'Costume type',
        type: 'select',
        order: 3,
        controlType: 'inputDropdownSingle',
        options: costumeTypes,
      }),

      new TextboxQuestion({
        key: 'catalogueNumber',
        label: 'Catalogue number',
        order: 4,
        controlType: 'textbox',
      }),

      new TextboxQuestion({
        key: 'sizes',
        label: 'Sizes',
        order: 5,
        controlType: 'dualInput',
      }),

      new TextboxQuestion({
        key: 'notes',
        label: 'Notes',
        type: '',
        order: 6,
        controlType: 'textbox',
      }),

      new TextboxQuestion({
        key: 'imageName',
        label: 'Picture',
        order: 7,
        controlType: 'fileUpload',
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
