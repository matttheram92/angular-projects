import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CostumeService } from '../costume-list-container/services/costume-service';
import {
  CostumeFilters,
  FilterItem,
} from '../costume-list-container/models/costume';
import { getBgColour } from '../helpers/costume-helper';

@Component({
  selector: 'app-costume-filters',
  templateUrl: './costume-filters.component.html',
  styleUrls: ['./costume-filters.component.css'],
})
export class CostumeFiltersComponent implements OnInit {
  costumeService: CostumeService;

  filterOptions!: CostumeFilters;
  filters: CostumeFilters = new CostumeFilters();
  colourHover: string = '';
  descriptionSearchValue: string = '';
  openFilterGroups: FilterTypes[] = [];

  @Output()
  filterChanged: EventEmitter<{
    filters: CostumeFilters;
    closePanel?: boolean;
  }> = new EventEmitter<{ filters: CostumeFilters; closePanel?: boolean }>();

  @Output()
  filtersFetched: EventEmitter<{ filters: CostumeFilters }> = new EventEmitter<{
    filters: CostumeFilters;
  }>();

  constructor(costumeService: CostumeService) {
    this.costumeService = costumeService;
  }

  async ngOnInit(): Promise<void> {
    this.filterOptions = await this.costumeService.getCostumeFilters();
    this.filtersFetched.emit({ filters: this.filterOptions });
  }

  onDescriptionChange(): void {
    this.filters.description = this.descriptionSearchValue;
    this.filterChanged.emit({ filters: this.filters, closePanel: false });
  }

  colourChecked(val: FilterItem): void {
    const index = this.filters.colours.findIndex((x) => x.label === val.label);
    if (index >= 0) {
      this.filters.colours.splice(index, 1);
    } else {
      this.filters.colours.push(val);
    }
    this.filterChanged.emit({ filters: this.filters, closePanel: false });
  }

  typeChecked(val: FilterItem): void {
    const index = this.filters.types.findIndex((x) => x.label === val.label);
    if (index >= 0) {
      this.filters.types.splice(index, 1);
    } else {
      this.filters.types.push(val);
    }
    this.filterChanged.emit({ filters: this.filters, closePanel: false });
  }

  sizeChecked(costumeSize: FilterItem): void {
    const index = this.filters.sizes.findIndex(
      (x) => x.label === costumeSize.label
    );
    if (index >= 0) {
      this.filters.sizes.splice(index, 1);
    } else {
      this.filters.sizes.push(costumeSize);
    }
    this.filterChanged.emit({ filters: this.filters, closePanel: false });
  }

  public localGetBgColour(colour: string): string {
    return getBgColour(colour);
  }
}

enum FilterTypes {
  Colours,
  Types,
  Sizes,
}
