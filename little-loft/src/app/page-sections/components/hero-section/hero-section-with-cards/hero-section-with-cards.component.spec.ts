import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionWithCardsComponent } from './hero-section-with-cards.component';

describe('HeroSectionWithCardsComponent', () => {
  let component: HeroSectionWithCardsComponent;
  let fixture: ComponentFixture<HeroSectionWithCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionWithCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionWithCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
