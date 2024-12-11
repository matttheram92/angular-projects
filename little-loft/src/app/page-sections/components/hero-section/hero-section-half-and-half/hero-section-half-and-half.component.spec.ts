import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionHalfAndHalfComponent } from './hero-section-half-and-half.component';

describe('HeroSectionHalfAndHalfComponent', () => {
  let component: HeroSectionHalfAndHalfComponent;
  let fixture: ComponentFixture<HeroSectionHalfAndHalfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionHalfAndHalfComponent]
    });
    fixture = TestBed.createComponent(HeroSectionHalfAndHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
