import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CostumeService } from '../costume-list-container/services/costume-service';
import { CostumeFilters } from '../costume-list-container/models/costume';

@Component({
  selector: 'app-costume-filters',
  templateUrl: './costume-filters.component.html',
  styleUrls: ['./costume-filters.component.css'],
})
export class CostumeFiltersComponent implements OnInit {
  costumeService: CostumeService;

  filterOptions!: CostumeFilters;
  filters: CostumeFilters = new CostumeFilters();

  @Output()
  filterChanged: EventEmitter<CostumeFilters> = new EventEmitter<CostumeFilters>();

  constructor(costumeService: CostumeService) {
    this.costumeService = costumeService;
  }

  async ngOnInit(): Promise<void> {
    this.filterOptions = await this.costumeService.getCostumeFilters();
  }

  colourChecked(val: string): void {
    const index = this.filters.colours.findIndex((x) => x === val);
    if (index >= 0) {
      this.filters.colours.splice(index, 1);
    } else {
      this.filters.colours.push(val);
    }
    this.filterChanged.emit(this.filters);
  }

  typeChecked(val: string): void {
    const index = this.filters.types.findIndex((x) => x === val);
    if (index >= 0) {
      this.filters.types.splice(index, 1);
    } else {
      this.filters.types.push(val);
    }
    this.filterChanged.emit(this.filters);
  }

  sizeChecked(costumeSize: string): void {
    const index = this.filters.sizes.findIndex((x) => x === costumeSize);
    if (index >= 0) {
      this.filters.sizes.splice(index, 1);
    } else {
      this.filters.sizes.push(costumeSize);
    }
    this.filterChanged.emit(this.filters);
  }
}
