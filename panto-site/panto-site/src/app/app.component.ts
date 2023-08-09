import { Component, OnInit, ViewChild } from '@angular/core';
import { CostumeListContainerComponent } from './costume-list-container/costume-list-container.component';
import { CostumeFilters } from './costume-list-container/models/costume';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormDialogComponent } from './dynamic-form/components/dynamic-form-dialog/dynamic-form-dialog.component';
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('costumeListContainer', { static: true })
  costumeListContainer!: CostumeListContainerComponent;

  mobileFilterVisible: boolean = false;
  filterOptions: CostumeFilters = new CostumeFilters();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    enableIndexedDbPersistence(getFirestore());
  }

  filterChanged(event: { filters: CostumeFilters; closePanel?: boolean }) {
    if (event.closePanel) {
      this.mobileFilterVisible = false;
    }
    this.costumeListContainer.filterChanged(event.filters);
  }

  toggleForm(): void {
    this.dialog.open(DynamicFormDialogComponent, {
      width: '500px',
    });
  }

  setFilters(event: { filters: CostumeFilters }): void {
    this.filterOptions = event.filters;
  }
}
