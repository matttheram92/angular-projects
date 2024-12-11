import { Component } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent {
    public searchCategories: string[] = [
        'Action figures',
        'Dolls',
        'Education toys',
        'Soft toys',
        'Rattles & chew toys',
        'Musical toys',
        'Construction toys',
        'Wooden toys',
        'Hanging mobiles',
        'Water toys',
      ];
}
