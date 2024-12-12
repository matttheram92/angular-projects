import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HEADER_HIDDEN_FOR_ROUTES } from 'src/app/helpers/router.helper';

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
  public isHome: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.skipLinkHref = `${this.router.url}#main-content`;
      this.showHeader = !HEADER_HIDDEN_FOR_ROUTES.includes(this.router.url);
      this.isHome = this.router.url === '/home';
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
