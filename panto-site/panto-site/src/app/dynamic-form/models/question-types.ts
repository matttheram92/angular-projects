import { CostumeSize } from 'src/app/costume-list-container/models/costume';
import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {}
export class ArrayQuestion extends QuestionBase<string[]> {}
export class CostumeSizeQuestion extends QuestionBase<CostumeSize[]> {}