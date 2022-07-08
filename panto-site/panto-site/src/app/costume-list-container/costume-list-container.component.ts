import { Component, OnInit } from '@angular/core';
import { CostumeService } from './services/costume-service';

@Component({
  selector: 'app-costume-list-container',
  templateUrl: './costume-list-container.component.html',
  styleUrls: ['./costume-list-container.component.css'],
})
export class CostumeListContainerComponent implements OnInit {
  costumeService: CostumeService;
  imageUrl = '';

  costumes: any[] = [];
  constructor(costumeService: CostumeService) {
    this.costumeService = costumeService;
  }

  async ngOnInit(): Promise<void> {
    this.costumes = await this.costumeService.getCostumes();
    this.imageUrl = await this.costumeService.getImageUrl('Picture1.jpg');
  }
}
