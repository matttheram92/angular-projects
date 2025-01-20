import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselButtonsCardComponent } from './carousel-buttons-card.component';

describe('CarouselButtonsCardComponent', () => {
  let component: CarouselButtonsCardComponent;
  let fixture: ComponentFixture<CarouselButtonsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselButtonsCardComponent],
      providers: [
        {
          provide: 'item',
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselButtonsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
