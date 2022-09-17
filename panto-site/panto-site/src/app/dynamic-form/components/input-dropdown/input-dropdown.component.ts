import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css'],
})
export class InputDropdownComponent implements OnInit {
  @Output()
  public selected: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  options!: { key: string; value: string }[];

  opened: boolean = false;
  searchValue: string = '';
  selectedKeys: string[] = [];

  get filteredOptions(): { key: string; value: string }[] {
    let filteredOptions = this.options.filter((option) => {
      const hasSearchValue = this.searchValue !== '';
      return !hasSearchValue || option.value.toLowerCase().includes(this.searchValue.toLowerCase());
    });

    filteredOptions = filteredOptions.filter((option) => {
      return !this.selectedKeys.includes(option.key);
    });

    if (
      this.searchValue !== '' &&
      !this.itemIsInList(this.searchValue, this.options.map(x => x.key)) && 
      !this.itemIsInList(this.searchValue, this.selectedKeys)
    ) {
      filteredOptions.unshift({
        key: this.searchValue,
        value: `Click here to add '${this.searchValue}'`,
      });
    }

    return filteredOptions;
  }

  constructor() {}

  ngOnInit(): void {}

  public clearInput(): void {
    this.searchValue = '';
    this.selectedKeys = [];
    this._emitChange();
  }

  public removeSelectedKey(index: number): void {
    this.selectedKeys.splice(index, 1);
  }

  public select(key: any): void {
    this.searchValue = '';
    this.selectedKeys.push(key);
    this.opened = false;
    this._emitChange();
  }

  private itemIsInList(item: string, list: string[]): boolean {
    return list.findIndex(
      (option) => option.toLowerCase() === item.toLowerCase()
    ) > -1
  }

  private _emitChange(): void {
    this.selected.emit(this.selectedKeys);
  }
}
