import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRsvpComponent } from './create-rsvp.component';

describe('CreateRsvpComponent', () => {
  let component: CreateRsvpComponent;
  let fixture: ComponentFixture<CreateRsvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRsvpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
