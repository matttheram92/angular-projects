import { Injectable } from '@angular/core';
import { Costume } from 'src/app/costume-list-container/models/costume';
import { QuestionBase } from '../models/question-base';
import {
  ArrayQuestion,
  CostumeSizeQuestion,
  TextboxQuestion,
} from '../models/question-types';

@Injectable()
export class QuestionService {
  public getQuestions(
    colours: { key: string; value: string }[],
    costumeTypes: { key: string; value: string }[],
    costume?: Costume
  ): QuestionBase<any>[] {
    const questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'description',
        label: 'Description',
        value: costume?.description,
        required: false,
        order: 1,
        controlType: 'textbox',
      }),

      new ArrayQuestion({
        key: 'colour',
        label: 'Colours',
        value: costume?.colours,
        order: 2,
        controlType: 'inputDropdown',
        options: colours,
      }),

      new TextboxQuestion({
        key: 'costumeType',
        label: 'Costume type',
        value: costume?.type,
        type: 'select',
        order: 3,
        controlType: 'inputDropdownSingle',
        options: costumeTypes,
      }),

      new TextboxQuestion({
        key: 'catalogueNumber',
        label: 'Catalogue number',
        value: costume?.catalogueNo,
        order: 4,
        controlType: 'textbox',
      }),

      new CostumeSizeQuestion({
        key: 'sizes',
        label: 'Sizes',
        value: costume?.quantity,
        order: 5,
        controlType: 'dualInput',
      }),

      new TextboxQuestion({
        key: 'notes',
        label: 'Notes',
        value: costume?.notes,
        type: '',
        order: 6,
        controlType: 'textbox',
      }),
    ];

    if (!costume) {
      questions.push(
        new TextboxQuestion({
          key: 'imageName',
          label: 'Picture',
          order: 7,
          controlType: 'fileUpload',
        })
      );
    }

    return questions.sort((a, b) => a.order - b.order);
  }
}
