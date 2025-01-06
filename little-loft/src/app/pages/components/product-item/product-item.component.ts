import { Component } from '@angular/core';
import { DUMMY_IMAGE_URLS } from 'src/app/helpers/consts/dummy-images.consts';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  public imageSrc: string = DUMMY_IMAGE_URLS.teddy;
}
