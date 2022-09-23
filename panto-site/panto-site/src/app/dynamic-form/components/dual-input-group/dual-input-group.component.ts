import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { CostumeSizeModel } from 'src/app/costume-list-container/models/costume';
import { Sizes } from '../../models/question-base';

@Component({
  selector: 'app-dual-input-group',
  templateUrl: './dual-input-group.component.html',
  styleUrls: ['./dual-input-group.component.css'],
})
export class DualInputGroupComponent implements OnInit {
  @Output()
  public changed: EventEmitter<any> = new EventEmitter<any>();

  public inputControlIterable: Sizes[] = [{ size: '', quantity: undefined }];
  private convertedArray: CostumeSizeModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  public addNewControl(): void {
    this.inputControlIterable.push({ size: '', quantity: undefined });
    this._emitChange();
  }

  public removeAtIndex(index: number): void {
    this.inputControlIterable.splice(index, 1);
    this._emitChange();
  }

  public onChange(): void {
    this.convertSizesToArray();
    this._emitChange();
  }

  private convertSizesToArray(): void {
    const sizes: CostumeSizeModel[] = [];
    this.inputControlIterable.forEach((item) => {
      if (item.quantity) {
        for (let i = 0; i < item.quantity; i++) {
          sizes.push({ id: Guid.create().toString(), name: item.size, checkedOutBy: ''});
        }
      }
    });
    this.convertedArray = sizes;
  }

  private _emitChange(): void {
    console.log(this.convertedArray);
    this.changed.emit(this.convertedArray);
  }
}
