import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section.component';
import { IconsModule } from '@app/icons/icons.module';
import { PageSectionsModule } from '@app/page-sections/page-sections.module';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSectionComponent],
      imports: [IconsModule, PageSectionsModule],
    });
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
