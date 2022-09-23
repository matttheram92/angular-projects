import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  @Input() 
  questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  savedState: boolean = false;

  constructor(
    private qcs: QuestionControlService,
    private costumeService: CostumeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }
  
  async onSubmit(): Promise<void> {
    const costume: CostumeModel = {
      description: this.form.value.description,
      catalogueNo: this.form.value.catalogueNumber,
      colours: this.form.value.colour,
      imageName: this.form.value.imageName,
      notes: this.form.value.notes,
      quantity: this.form.value.sizes,
      type: this.form.value.costumeType,
    };
    await this.costumeService.createCostume(costume);
    this.savedState = true;
  }

  onClose(): void {
    this.dialog.closeAll();
    window.location.reload();
  }
}
