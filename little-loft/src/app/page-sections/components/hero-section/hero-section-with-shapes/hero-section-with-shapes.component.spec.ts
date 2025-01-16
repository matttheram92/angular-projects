import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionWithShapesComponent } from './hero-section-with-shapes.component';
import { ControlsModule } from '@app/controls/contols.module';
import { TypeographyModule } from '@app/typography/typography.module';

describe('HeroSectionWithShapesComponent', () => {
  let component: HeroSectionWithShapesComponent;
  let fixture: ComponentFixture<HeroSectionWithShapesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionWithShapesComponent],
      imports: [ControlsModule, TypeographyModule],
      providers: [
        {
          provide: 'sectionData',
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(HeroSectionWithShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
