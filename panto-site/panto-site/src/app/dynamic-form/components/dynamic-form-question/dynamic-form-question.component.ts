import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileUpload } from 'src/app/file-upload/models/file-upload.model';
import { QuestionBase } from '../../models/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  @Output()
  public changed: EventEmitter<any> = new EventEmitter<any>();

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  public inputGroupOnChange(event: any, controlName: string): void {
    this.changed.emit(event);
  }

  public inputDropdownOnChange(event: any, controlName: string): void {
    this.changed.emit(event);
  }

  public fileUploaded(event: FileUpload, controlName: string): void {
    this.changed.emit(event);
  }
}
