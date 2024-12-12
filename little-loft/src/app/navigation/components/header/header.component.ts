import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showSearchSubMenu = false;
  public showSideMenu = false;
  public loggedIn = false;
  public skipLinkHref = '#main-content';
  public showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.skipLinkHref = `${this.router.url}#main-content`;
      if (this.router.url === '/sell') {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    const isClickInside =
      clickedElement.closest('#searchSubMenu') ||
      clickedElement.closest('#btnSearch');

    if (!isClickInside) {
      this.showSearchSubMenu = false;
    }
  }

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

  public toggleSearchMenu(): void {
    this.showSearchSubMenu = !this.showSearchSubMenu;
  }
}
