import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CostumeService } from '../costume-list-container/services/costume-service';
import {
    CostumeFilters,
    FilterItem,
} from '../costume-list-container/models/costume';
import { getBgColour } from '../helpers/costume-helper';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-costume-filters',
    templateUrl: './costume-filters.component.html',
    styleUrls: ['./costume-filters.component.css'],
})
export class CostumeFiltersComponent implements OnInit {
    private _subscription = new Subscription();
    public filterOptions!: CostumeFilters;
    public filters: CostumeFilters = new CostumeFilters();
    public colourHover: string = '';
    public descriptionSearchValue: string = '';
    public loading: boolean = false;

    @Output()
    filterChanged: EventEmitter<{
        filters: CostumeFilters;
        closePanel?: boolean;
    }> = new EventEmitter<{ filters: CostumeFilters; closePanel?: boolean }>();

    constructor(private costumeService: CostumeService) {}

    ngOnInit(): void {
        this._subscription.add(
            this.costumeService
                .getCostumeFilters()
                .subscribe((costumeFilters: CostumeFilters) => {
                    this.filterOptions = costumeFilters;
                })
        );

        this._subscription.add(
            this.costumeService
                .getLoadingStatus()
                .subscribe((isLoading: boolean) => {
                    this.loading = isLoading;
                })
        );
    }

    public runSearch(): void {
        this.loading = true;
        this.filterChanged.emit({ filters: this.filters, closePanel: false });
    }

    public coloursLabel(): string {
        return this.filters?.colours?.length === 0
            ? 'Colours'
            : `Colours (${this.filters.colours.length})`;
    }

    public typesLabel(): string {
        return this.filters?.types?.length === 0
            ? 'Types'
            : `Types (${this.filters.types.length})`;
    }

    public sizesLabel(): string {
        return this.filters?.sizes?.length === 0
            ? 'Sizes'
            : `Sizes (${this.filters.sizes.length})`;
    }

    public onDescriptionChange(): void {
        this.filters.description = this.descriptionSearchValue;
    }

    public colourChecked(val: FilterItem): void {
        const index = this.filters.colours.findIndex(
            (x) => x.label === val.label
        );
        if (index >= 0) {
            this.filters.colours.splice(index, 1);
        } else {
            this.filters.colours.push(val);
        }
        this.runSearch();
    }

    public typeChecked(val: FilterItem): void {
        const index = this.filters.types.findIndex(
            (x) => x.label === val.label
        );
        if (index >= 0) {
            this.filters.types.splice(index, 1);
        } else {
            this.filters.types.push(val);
        }
        this.runSearch();
    }

    public sizeChecked(costumeSize: FilterItem): void {
        const index = this.filters.sizes.findIndex(
            (x) => x.label === costumeSize.label
        );
        if (index >= 0) {
            this.filters.sizes.splice(index, 1);
        } else {
            this.filters.sizes.push(costumeSize);
        }
        this.runSearch();
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
