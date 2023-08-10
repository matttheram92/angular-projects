import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new UntypedFormControl(question.value || '', Validators.required)
        : new UntypedFormControl(question.value || '');
    });
    return new UntypedFormGroup(group);
  }
}
