import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { EXPLORE_DASHBOARD_DATA } from '@app/pages/components/explore/consts/explore.consts';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  const mockSectionData = EXPLORE_DASHBOARD_DATA.sections;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      providers: [{ provide: 'sectionData', useValue: mockSectionData }],
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
