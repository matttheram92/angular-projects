import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashWithTextAndImageComponent } from './splash-with-text-and-image.component';

describe('SplashWithTextAndImageComponent', () => {
  let component: SplashWithTextAndImageComponent;
  let fixture: ComponentFixture<SplashWithTextAndImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashWithTextAndImageComponent]
    });
    fixture = TestBed.createComponent(SplashWithTextAndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
