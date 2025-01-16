import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionWithImageComponent } from './hero-section-with-image.component';
import { ControlsModule } from '@app/controls/contols.module';

describe('HeroSectionWithImageComponent', () => {
  let component: HeroSectionWithImageComponent;
  let fixture: ComponentFixture<HeroSectionWithImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionWithImageComponent],
      imports: [ControlsModule],
      providers: [
        {
          provide: 'sectionData',
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(HeroSectionWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
