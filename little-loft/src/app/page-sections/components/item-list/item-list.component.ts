import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '@app/core/models/product-list.models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  standalone: false,
})
export class ItemListComponent {
  @Input() title!: string;
  @Input() items!: ProductItem[];
  @Output() removeItem = new EventEmitter<number>();

  onDeleteClick(productId: number): void {
    this.removeItem.emit(productId);
  }
}
