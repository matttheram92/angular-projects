import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionWithShapesComponent } from './hero-section-with-shapes.component';

describe('HeroSectionWithShapesComponent', () => {
  let component: HeroSectionWithShapesComponent;
  let fixture: ComponentFixture<HeroSectionWithShapesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionWithShapesComponent]
    });
    fixture = TestBed.createComponent(HeroSectionWithShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
