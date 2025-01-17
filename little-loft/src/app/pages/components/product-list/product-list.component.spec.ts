import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ControlsModule } from '@app/controls/contols.module';
import { TypeographyModule } from '@app/typography/typography.module';
import { PageSectionsModule } from '@app/page-sections/page-sections.module';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [ControlsModule, TypeographyModule, PageSectionsModule],
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
