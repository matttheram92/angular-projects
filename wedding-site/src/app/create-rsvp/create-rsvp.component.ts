import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RsvpService } from '../rsvp/rsvp.service';

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
    public formBuilder: FormBuilder
  ) { 
    this.rsvpForm = this.formBuilder.group({
      name: [''],
      attending: [''],
      dietryRequirements: ['']
    })      
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.rsvpService.createRsvp(this.rsvpForm.value);
   };
}