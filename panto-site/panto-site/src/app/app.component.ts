import { Component, OnInit, ViewChild } from '@angular/core';
import { CostumeListContainerComponent } from './costume-list-container/costume-list-container.component';
import { CostumeFilters } from './costume-list-container/models/costume';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormDialogComponent } from './dynamic-form/components/dynamic-form-dialog/dynamic-form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('costumeListContainer', { static: true })
  costumeListContainer!: CostumeListContainerComponent;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  filterChanged(filters: CostumeFilters) {
    console.log('filter changed');
    this.costumeListContainer.filterChanged(filters);
  }

  toggleForm(): void {
    this.dialog.open(DynamicFormDialogComponent, {
      width: '500px'
    });
  }
}