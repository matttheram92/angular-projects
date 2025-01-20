import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isMobileView } from '@app/core/services/breakpoint.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  standalone: false,
})
export class SearchPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateBreakpoint();

    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.updateBreakpoint());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateBreakpoint(): void {
    const isMobile = isMobileView();

    if (!isMobile) {
      this.router.navigate(['home']);
    }
  }
}
