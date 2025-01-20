import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HEADER_HIDDEN_FOR_ROUTES } from '@app/core/consts/navigation.consts';
import { AppState } from '@app/store/app.state';
import { selectWishlistItems } from '@app/store/selectors/wishlist.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  public showSearchSubMenu = false;
  public showSideMenu = false;
  public loggedIn = false;
  public skipLinkHref = '#main-content';
  public showHeader: boolean = true;
  public isHome: boolean = true;
  public inBasket: number = 0;
  public inWishlist: number = 0;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private location: Location
  ) {
    this.router.events.subscribe(() => {
      this.skipLinkHref = `${this.location.path()}#main-content`;
      this.showHeader = !HEADER_HIDDEN_FOR_ROUTES.includes(this.router.url);
      this.isHome = this.router.url === '/home';
    });

    this.store
      .select((state) => state.basket.itemIds)
      .subscribe((products) => {
        this.inBasket = products.length;
      });

    this.store.select(selectWishlistItems).subscribe((itemIds) => {
      this.inWishlist = itemIds.length;
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

  public toggleSearchMenu(): void {
    this.showSearchSubMenu = !this.showSearchSubMenu;
  }
}
