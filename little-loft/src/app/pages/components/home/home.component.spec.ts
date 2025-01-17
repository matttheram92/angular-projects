import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PageSectionsModule } from '@app/page-sections/page-sections.module';
import { ControlsModule } from '@app/controls/contols.module';
import { HeroSectionModule } from '@app/page-sections/components/hero-section/hero-section.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [PageSectionsModule, ControlsModule, HeroSectionModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
