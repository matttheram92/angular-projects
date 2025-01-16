import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionWithCardsComponent } from './hero-section-with-cards.component';
import { ONBOARDING_SPLASH_SCREEN_DATA } from '../../splash-screen/consts/splash-screen.consts';
import { TypeographyModule } from '@app/typography/typography.module';
import { IconsModule } from '@app/icons/icons.module';

describe('HeroSectionWithCardsComponent', () => {
  let component: HeroSectionWithCardsComponent;
  let fixture: ComponentFixture<HeroSectionWithCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSectionWithCardsComponent],
      imports: [TypeographyModule, IconsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionWithCardsComponent);
    component = fixture.componentInstance;
    component.splashScreenInfo = ONBOARDING_SPLASH_SCREEN_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
