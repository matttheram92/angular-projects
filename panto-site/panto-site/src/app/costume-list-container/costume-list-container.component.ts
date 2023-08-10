import { Component, OnInit, Input } from '@angular/core';
import { CostumeService } from './services/costume-service';
import { Costume, CostumeFilters, FilterItem } from './models/costume';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CheckOutDialogComponent } from './components/check-out-dialog/check-out-dialog.component';
import { LargeImageDialogComponent } from './components/large-image-dialog/large-image-dialog.component';
import { getBgColour } from '../helpers/costume-helper';

@Component({
  selector: 'app-costume-list-container',
  templateUrl: './costume-list-container.component.html',
  styleUrls: ['./costume-list-container.component.css'],
})
export class CostumeListContainerComponent implements OnInit {
  costumes: Costume[] = [];
  rawCostumes: Costume[] = [];
  checkOutHover: string = '';
  imagesOnly: boolean = false;
  filters!: CostumeFilters;
  firstPage: boolean = false;
  lastPage: boolean = false;

  @Input()
  colours: string[] = [];
  @Input()
  folders: FilterItem[] = [];

  constructor(
    public costumeService: CostumeService,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this.costumes = await this.costumeService.getCostumes();
    this.rawCostumes = Object.assign(this.costumes);

    this.firstPage = true;
    if (this.costumes.length > 0 && this.costumes.length < 9) {
      this.lastPage = true;
    }
  }

  public async folderSelected(folder: FilterItem): Promise<void> {
    if (this.folderAlreadySelected(folder)) {
      return;
    }

    this.filters = new CostumeFilters();
    if (folder.label === 'All') {
      this.filters.folders = [];
    } else {
      this.filters.folders = [folder];
    }
    await this.filterChanged(this.filters);
  }

  private folderAlreadySelected(folder: FilterItem) {
    return (
      this.filters &&
      ((this.filters.folders.length === 0 && folder.label === 'All') ||
        (this.filters.folders.length > 0 &&
          this.filters.folders[0].label === folder.label))
    );
  }

  public async filterChanged(filters: CostumeFilters): Promise<void> {
    this.filters = filters;
    //if (filters.description !== '' && filters.colours.length === 0 && filters.sizes.length === 0 && filters.types.length === 0) {
    if (filters.description !== '' || filters.sizes.length > 0) {
      //this.costumes = this.rawCostumes.filter(costume => costume.description.toLowerCase().includes(filters.description.toLowerCase()));
      this.costumes = await this.costumeService.getCostumesWithLocalFilters(
        filters
      );
    } else {
      this.costumes = await this.costumeService.getCostumes(filters);
    }

    this.firstPage = true;
    if (this.costumes.length > 0 && this.costumes.length < 9) {
      this.lastPage = true;
    }
  }

  public openCheckOutDialog(costume: Costume): void {
    this.dialog.open(CheckOutDialogComponent, {
      width: '500px',
      data: {
        costume: costume,
      },
    });
  }

  public openLargeImage(costume: Costume): void {
    this.dialog.open(LargeImageDialogComponent, {
      width: '500px',
      data: {
        costume: costume,
      },
    });
  }

  public localGetBgColour(colour: string): string {
    return getBgColour(colour);
  }

  public async nextPage(): Promise<void> {
    if (
      this.filters &&
      (this.filters.description !== '' || this.filters.sizes.length > 0)
    ) {
      this.costumes = await this.costumeService.getCostumesWithLocalFilters(
        this.filters,
        true,
        false
      );
    } else {
      this.costumes = await this.costumeService.getCostumes(
        this.filters,
        true,
        false
      );
    }

    if (this.costumes.length > 0 && this.costumes.length < 9) {
      this.lastPage = true;
      this.firstPage = false;
    }
  }

  public async prevPage(): Promise<void> {
    if (
      this.filters &&
      (this.filters.description !== '' || this.filters.sizes.length > 0)
    ) {
      this.costumes = await this.costumeService.getCostumesWithLocalFilters(
        this.filters,
        false,
        true
      );
    } else {
      this.costumes = await this.costumeService.getCostumes(
        this.filters,
        false,
        true
      );
    }

    if (this.costumes.length > 0 && this.costumes.length < 9) {
      this.lastPage = false;
      this.firstPage = true;
    }
  }
}
