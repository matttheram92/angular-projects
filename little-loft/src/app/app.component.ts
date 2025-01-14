import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HEADER_HIDDEN_FOR_ROUTES } from './core/consts/navigation.consts';
import { isMobileView } from './core/services/breakpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  public title: string = 'little-loft';
  public showHeader: boolean = true;
  public isMobile: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateBreakpoint();
    window.addEventListener('resize', () => this.updateBreakpoint());

    this.router.events.subscribe(() => {
      this.showHeader =
        !this.isMobile || !HEADER_HIDDEN_FOR_ROUTES.includes(this.router.url);
    });
  }

  private updateBreakpoint(): void {
    this.isMobile = isMobileView();
  }
}
