import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Costume } from '../../models/costume';
import { CheckInDialogComponent } from '../check-in-dialog/check-in-dialog.component';
import { CheckOutDialogComponent } from '../check-out-dialog/check-out-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-dots-menu',
  templateUrl: './dots-menu.component.html',
  styleUrls: ['./dots-menu.component.css'],
})
export class DotsMenuComponent implements OnInit {
  @Input()
  costume!: Costume;

  constructor(public dialog: MatDialog, private eRef: ElementRef) {}

  menuVisible: boolean = false;

  ngOnInit(): void {}

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.menuVisible = false;
    }
  }

  checkOutClicked(): void {
    this.dialog.open(CheckOutDialogComponent, {
      width: '500px',
      data: {
        costume: this.costume,
      },
    });
  }

  checkInClicked(): void {
    this.dialog.open(CheckInDialogComponent, {
      width: '500px',
      data: {
        costume: this.costume,
      },
    });
  }

  deleteClicked(): void {
    this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {
        costume: this.costume,
      },
    });
  }
}
