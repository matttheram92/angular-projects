import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCircleCardComponent } from './image-circle-card.component';

describe('ImageCircleCardComponent', () => {
  let component: ImageCircleCardComponent;
  let fixture: ComponentFixture<ImageCircleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCircleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCircleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
