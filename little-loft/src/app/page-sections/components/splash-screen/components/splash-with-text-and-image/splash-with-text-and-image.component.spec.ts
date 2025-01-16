import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashWithTextAndImageComponent } from './splash-with-text-and-image.component';
import { TypeographyModule } from '@app/typography/typography.module';

describe('SplashWithTextAndImageComponent', () => {
  let component: SplashWithTextAndImageComponent;
  let fixture: ComponentFixture<SplashWithTextAndImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashWithTextAndImageComponent],
      imports: [TypeographyModule],
      providers: [
        {
          provide: 'sectionData',
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(SplashWithTextAndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
