import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashWithTextComponent } from './splash-with-text.component';
import { TypeographyModule } from '@app/typography/typography.module';

describe('SplashWithTextComponent', () => {
  let component: SplashWithTextComponent;
  let fixture: ComponentFixture<SplashWithTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashWithTextComponent],
      imports: [TypeographyModule],
      providers: [
        {
          provide: 'sectionData',
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(SplashWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
