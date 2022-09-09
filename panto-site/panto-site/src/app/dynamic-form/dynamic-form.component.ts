import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CostumeModel } from '../costume-list-container/models/costume';
import { CostumeService } from '../costume-list-container/services/costume-service';
import { QuestionBase } from './models/question-base';
import { QuestionControlService } from './services/question-control-service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;

  constructor(
    private qcs: QuestionControlService,
    private costumeService: CostumeService
  ) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    const costume: CostumeModel = {
      description: this.form.value.description,
      catalogueNo: this.form.value.catalogueNumber,
      colours: [],
      imageName: '',
      notes: this.form.value.notes,
      quantity: [],
      type: this.form.value.costumeType,
    };
    this.costumeService.createCostume(costume);
  }
}
