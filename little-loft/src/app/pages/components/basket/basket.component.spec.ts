import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import { TypeographyModule } from '@app/typography/typography.module';
import { basketReducer } from '@app/store/reducers/basket.reducer';
import { wishlistReducer } from '@app/store/reducers/wishlist.reducer';
import { ControlsModule } from '@app/controls/contols.module';
import { StoreModule } from '@ngrx/store';
import { PageSectionsModule } from '@app/page-sections/page-sections.module';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketComponent],
      imports: [
        ControlsModule,
        TypeographyModule,
        PageSectionsModule,
        StoreModule.forRoot({
          basket: basketReducer,
          wishlist: wishlistReducer,
        }),
      ],
    });
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
