import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RsvpService } from '../rsvp/rsvp.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-create-rsvp',
  templateUrl: './create-rsvp.component.html',
  styleUrls: ['./create-rsvp.component.scss']
})

export class CreateRsvpComponent implements OnInit {
  public rsvpForm: FormGroup;
  attendingStatus?: number;

  constructor(
    public rsvpService: RsvpService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.rsvpForm = this.emptyForm;
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '250px',
      data: { name: this.rsvpForm.value.name, attending: this.rsvpForm.value.attending },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSubmit();
      }
    });
  }

  onSubmit() {
    //this.rsvpService.createRsvp(this.rsvpForm.value);
    alert(`${this.rsvpForm.value.name} said ${this.rsvpForm.value.attending === 1 ? 'yes' : 'no'}`);
    this.rsvpForm = this.emptyForm;
  };

  get emptyForm(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      attending: [''],
      dietryRequirements: ['']
    });
  }
}