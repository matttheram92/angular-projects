import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { HOME_DASHBOARD_DATA } from '@app/pages/components/home/consts/home.consts';
import {
  DashboardHeroHalfAndHalf,
  DashboardHeroImage,
} from './models/dashboard.models';
import { ControlsModule } from '@app/controls/contols.module';
import { CommonModule } from '@angular/common';
import { HeroSectionModule } from '../hero-section/hero-section.module';
import { TypeographyModule } from '@app/typography/typography.module';
import { PageSectionsModule } from '@app/page-sections/page-sections.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        ControlsModule,
        CommonModule,
        BrowserModule,
        HeroSectionModule,
        TypeographyModule,
        PageSectionsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render dashboard sections based on dashboard info', () => {
    component.dashboardInfo = HOME_DASHBOARD_DATA;
    fixture.detectChanges();

    expect(fixture.componentInstance.injectors.length).toBe(
      HOME_DASHBOARD_DATA.sections.length
    );
  });

  it('should render HeroImage section with correct content', () => {
    component.dashboardInfo = HOME_DASHBOARD_DATA;
    fixture.detectChanges();

    const heroImageSection = fixture.debugElement.query(By.css('#hero-image'));
    expect(heroImageSection).toBeTruthy();

    const header = heroImageSection.query(By.css('#section-title'))
      .nativeElement.textContent;
    expect(header).toBe(
      ` ${(HOME_DASHBOARD_DATA.sections[0] as DashboardHeroImage).header} `
    );

    const image = heroImageSection.query(
      By.css('#section-image')
    ).nativeElement;
    expect(image.getAttribute('src')).toBe(
      (HOME_DASHBOARD_DATA.sections[0] as DashboardHeroImage).imageSrc
    );
  });

  it('should render Carousel section with carousel data', () => {
    component.dashboardInfo = HOME_DASHBOARD_DATA;
    fixture.detectChanges();

    const carouselSection = fixture.debugElement.query(By.css('#carousel'));
    expect(carouselSection).toBeTruthy();
  });

  it('should render HeroHalfAndHalf section with correct content', () => {
    component.dashboardInfo = HOME_DASHBOARD_DATA;
    fixture.detectChanges();

    const heroHalfAndHalfSection = fixture.debugElement.query(
      By.css('#hero-half-and-half')
    );
    expect(heroHalfAndHalfSection).toBeTruthy();

    const header = heroHalfAndHalfSection.query(By.css('#section-title'))
      .nativeElement.textContent;
    expect(header).toBe(
      (HOME_DASHBOARD_DATA.sections[2] as DashboardHeroHalfAndHalf).header
    );

    const image = heroHalfAndHalfSection.query(
      By.css('#section-image')
    ).nativeElement;
    expect(image.getAttribute('src')).toBe(
      (HOME_DASHBOARD_DATA.sections[2] as DashboardHeroHalfAndHalf).imageSrc
    );
  });
});
