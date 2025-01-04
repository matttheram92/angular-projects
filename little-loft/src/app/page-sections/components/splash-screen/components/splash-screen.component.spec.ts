import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashScreenComponent } from './splash-screen.component';
import { Component, Injector } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  SplashScreenInfo,
  SplashScreenSection,
  SplashScreenTypes,
} from '../models/splash-screen.models';
import { SPLASH_SCREEN_COMPONENTS } from '../consts/splash-screen.consts';
import { isMobileView } from 'src/app/helpers/breakpoint.helper';

jest.mock('src/app/helpers/breakpoint.helper');

describe('SplashScreenComponent', () => {
  let component: SplashScreenComponent;
  let fixture: ComponentFixture<SplashScreenComponent>;

  const mockSplashScreenInfo: SplashScreenInfo = {
    title: 'Test Splash Screen',
    sections: [
      {
        index: 0,
        type: SplashScreenTypes.Text,
        header: 'Header 1',
        subHeader: 'Subheader 1',
        body: 'Body 1',
      },
      {
        index: 1,
        type: SplashScreenTypes.TextAndImage,
        header: 'Header 2',
        subHeader: 'Subheader 2',
        body: 'Body 2',
        step: 'Step 1',
        src: 'image-src',
        alt: 'Image Alt',
        color: '#fff',
      },
      {
        index: 2,
        type: SplashScreenTypes.Action,
        header: 'Header 3',
        subHeader: 'Subheader 3',
        body: 'Body 3',
        actionText: 'Click Me',
        actionHref: '/action',
      },
    ],
  };

  @Component({ selector: 'mock-splash-with-text', template: '' })
  class MockSplashWithTextComponent {
    constructor(public sectionData: any) {}
  }

  @Component({ selector: 'mock-splash-with-text-and-image', template: '' })
  class MockSplashWithTextAndImageComponent {
    constructor(public sectionData: any) {}
  }

  @Component({ selector: 'mock-splash-with-action', template: '' })
  class MockSplashWithActionComponent {
    constructor(public sectionData: any) {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplashScreenComponent],
      providers: [Injector],
    }).compileComponents();

    fixture = TestBed.createComponent(SplashScreenComponent);
    component = fixture.componentInstance;
    component.splashScreenInfo = mockSplashScreenInfo;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the first splash section visible', () => {
    jest.spyOn(component, 'updateBreakpoint');
    fixture.detectChanges();
    expect(component.visibleSplashIndex).toBe(0);
    expect(component.updateBreakpoint).toHaveBeenCalled();
  });

  it('should call updateBreakpoint on window resize', () => {
    jest.spyOn(component, 'updateBreakpoint');
    window.dispatchEvent(new Event('resize'));
    expect(component.updateBreakpoint).toHaveBeenCalled();
  });

  it('should render the correct component for each section', () => {
    SPLASH_SCREEN_COMPONENTS.text = MockSplashWithTextComponent;
    SPLASH_SCREEN_COMPONENTS['text-and-image'] =
      MockSplashWithTextAndImageComponent;
    SPLASH_SCREEN_COMPONENTS.action = MockSplashWithActionComponent;

    component.splashScreenInfo = {
      title: '',
      sections: [
        {
          index: 0,
          type: SplashScreenTypes.Text,
          header: '',
          subHeader: '',
          body: '',
        },
        {
          index: 1,
          type: SplashScreenTypes.TextAndImage,
          header: '',
          subHeader: '',
          body: '',
          step: '',
          src: '',
          alt: '',
          color: '',
        },
        {
          index: 2,
          type: SplashScreenTypes.Action,
          header: '',
          subHeader: '',
          body: '',
          actionText: '',
          actionHref: '',
        },
      ],
    };

    fixture.detectChanges();

    const sections = fixture.debugElement.queryAll(By.css('ng-container'));
    expect(sections.length).toBe(3);
  });

  it('should navigate to the previous section when previous() is called', () => {
    component.visibleSplashIndex = 1;
    component.previous();
    expect(component.visibleSplashIndex).toBe(0);
  });

  it('should not navigate to the previous section if on the first section', () => {
    component.visibleSplashIndex = 0;
    component.previous();
    expect(component.visibleSplashIndex).toBe(0);
  });

  it('should navigate to the next section when next() is called', () => {
    component.visibleSplashIndex = 0;
    component.next();
    expect(component.visibleSplashIndex).toBe(1);
  });

  it('should not navigate to the next section if on the last section', () => {
    component.visibleSplashIndex = 2;
    component.next();
    expect(component.visibleSplashIndex).toBe(2);
  });

  it('should correctly identify the first section', () => {
    component.visibleSplashIndex = 0;
    expect(component.isFirst()).toBe(false);

    component.visibleSplashIndex = 1;
    expect(component.isFirst()).toBe(true);
  });

  it('should correctly identify the last section', () => {
    component.visibleSplashIndex = 2;
    expect(component.isLast()).toBe(false);

    component.visibleSplashIndex = 1;
    expect(component.isLast()).toBe(true);
  });

  it('should set isMobile based on the screen size', () => {
    (isMobileView as jest.Mock).mockReturnValue(true);
    component.updateBreakpoint();
    expect(component.isMobile).toBe(true);

    (isMobileView as jest.Mock).mockReturnValue(false);
    component.updateBreakpoint();
    expect(component.isMobile).toBe(false);
  });

  it('should emit a correctly configured injector for each section', () => {
    const section: SplashScreenSection = {
      index: 0,
      type: SplashScreenTypes.Text,
      header: 'Header',
      subHeader: 'Subheader',
      body: 'Body',
    };

    const injector = component.getInjector(section);
    expect(injector.get('sectionData')).toBe(section);
  });
});
