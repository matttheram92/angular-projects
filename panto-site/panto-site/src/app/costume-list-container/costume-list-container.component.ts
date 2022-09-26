import { Component, OnInit, Input } from '@angular/core';
import { CostumeService } from './services/costume-service';
import { Costume, CostumeFilters } from './models/costume';
import { MatDialog } from '@angular/material/dialog';
import { CheckOutDialogComponent } from './components/check-out-dialog/check-out-dialog.component';
import { LargeImageDialogComponent } from './components/large-image-dialog/large-image-dialog.component';

@Component({
  selector: 'app-costume-list-container',
  templateUrl: './costume-list-container.component.html',
  styleUrls: ['./costume-list-container.component.css'],
})
export class CostumeListContainerComponent implements OnInit {
  costumes: Costume[] = [];
  checkOutHover: string = '';
  
  @Input()
  colours: string[] = [];

  constructor(public costumeService: CostumeService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.costumes = await this.costumeService.getCostumes();
  }

  public async filterChanged(filters: CostumeFilters): Promise<void> {
    this.costumes = await this.costumeService.getCostumes(filters);
  }

  public openCheckOutDialog(costume: Costume): void {
    this.dialog.open(CheckOutDialogComponent, {
      width: '500px',
      data: {
        costume: costume
      }
    });
  }

  public openLargeImage(costume: Costume): void {
    this.dialog.open(LargeImageDialogComponent, {
      width: '500px',
      data: {
        costume: costume
      }
    });
  }

  public getBgColour(colour: string): string {
    switch(colour) {
      case 'Burgundy':
        return 'maroon';
      default:
        return colour;
    }
  }
}
