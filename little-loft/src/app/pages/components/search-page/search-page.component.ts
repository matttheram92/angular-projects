import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isMobileView } from 'src/app/helpers/breakpoint.helper';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.updateBreakpoint();
    window.addEventListener('resize', () => this.updateBreakpoint());
  }

  private updateBreakpoint(): void {
    const isMobile = isMobileView();

    if (!isMobile) {
      this.router.navigate(['home']);
    }
  }
}
