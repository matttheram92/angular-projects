import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DynamicFormDialogComponent } from 'src/app/dynamic-form/components/dynamic-form-dialog/dynamic-form-dialog.component';
import { Costume, FilterItem } from '../../models/costume';
import { CheckInDialogComponent } from '../check-in-dialog/check-in-dialog.component';
import { CheckOutDialogComponent } from '../check-out-dialog/check-out-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { FolderDialogComponent } from '../folder-dialog/folder-dialog.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dots-menu',
  templateUrl: './dots-menu.component.html',
  styleUrls: ['./dots-menu.component.css'],
})
export class DotsMenuComponent implements OnInit {
  @Input()
  costume!: Costume;
  @Input()
  folders: FilterItem[] = [];
  @Input()
  type!: 'selected' | 'list';

  constructor(public dialog: MatDialog, private eRef: ElementRef) {}

  menuVisible: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

  // ngAfterViewInit(): void {
  //   const button = document.getElementById(
  //     `dots-dropdown-button-${this.costume?.id}-${this.type}`
  //   );
  //   button?.setAttribute(
  //     'data-dropdown-toggle',
  //     `dots-dropdown-${this.costume?.id}-${this.type}`
  //   );
  // }

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

  addToFolderClicked(): void {
    this.dialog.open(FolderDialogComponent, {
      width: '500px',
      data: {
        costume: this.costume,
        folders: this.folders
          .filter((f) => f.label !== 'All')
          .map((f) => f.label),
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

  toggleForm(): void {
    this.dialog.open(DynamicFormDialogComponent, {
      width: '500px',
      data: {
        costumeToEdit: this.costume,
      },
    });
  }
}
