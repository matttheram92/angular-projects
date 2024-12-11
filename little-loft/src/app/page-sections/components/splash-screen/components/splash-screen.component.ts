import { Component, Injector, Input, OnInit } from '@angular/core';
import {
  SplashScreenInfo,
  SplashScreenSection,
  SplashScreenTypes,
} from '../models/splash-screen.models';
import { isMobileView } from 'src/app/helpers/breakpoint.helper';
import { SPLASH_SCREEN_COMPONENTS } from '../consts/splash-screen.consts';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  public visibleSplashIndex: number = 0;
  public isMobile: boolean = false;
  @Input() public splashScreenInfo!: SplashScreenInfo;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.updateBreakpoint();
    window.addEventListener('resize', () => this.updateBreakpoint());
  }

  updateBreakpoint(): void {
    this.isMobile = isMobileView();
  }

  public getComponentType(type: SplashScreenTypes) {
    return SPLASH_SCREEN_COMPONENTS[type];
  }

  public getInjector<T extends SplashScreenSection>(section: T): Injector {
    return Injector.create({
      providers: [{ provide: 'sectionData', useValue: section }],
      parent: this.injector,
    });
  }

  public previous(): void {
    if (this.isFirst()) {
      this.visibleSplashIndex--;
    }
  }

  public isFirst(): boolean {
    return this.visibleSplashIndex > 0;
  }

  public next(): void {
    if (this.isLast()) {
      this.visibleSplashIndex++;
    }
  }

  public isLast(): boolean {
    return this.visibleSplashIndex < this.splashScreenInfo.sections.length - 1;
  }
}
