import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashWithActionComponent } from './splash-with-action.component';
import { TypeographyModule } from '@app/typography/typography.module';
import { ControlsModule } from '@app/controls/contols.module';

describe('SplashWithActionComponent', () => {
  let component: SplashWithActionComponent;
  let fixture: ComponentFixture<SplashWithActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashWithActionComponent],
      imports: [TypeographyModule, ControlsModule],
      providers: [
        {
          provide: 'sectionData',
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(SplashWithActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
