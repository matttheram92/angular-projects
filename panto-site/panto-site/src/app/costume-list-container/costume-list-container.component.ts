import { Component, OnInit, Input } from '@angular/core';
import { CostumeService } from './services/costume-service';
import { Costume, CostumeFilters } from './models/costume';

@Component({
  selector: 'app-costume-list-container',
  templateUrl: './costume-list-container.component.html',
  styleUrls: ['./costume-list-container.component.css'],
})
export class CostumeListContainerComponent implements OnInit {
  costumeService: CostumeService;

  costumes: Costume[] = [];
  
  @Input()
  colours: string[] = [];

  constructor(costumeService: CostumeService) {
    this.costumeService = costumeService;
  }

  async ngOnInit(): Promise<void> {
    this.costumes = await this.costumeService.getCostumes();
  }

  public async filterChanged(filters: CostumeFilters): Promise<void> {
    this.costumes = await this.costumeService.getCostumes(filters);
  }
}
