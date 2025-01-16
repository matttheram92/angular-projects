import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavComponent } from './mobile-nav.component';
import { MobileNavButtonComponent } from './mobile-nav-button/mobile-nav-button.component';
import { IconsModule } from '@app/icons/icons.module';

describe('MobileNavComponent', () => {
  let component: MobileNavComponent;
  let fixture: ComponentFixture<MobileNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavComponent, MobileNavButtonComponent],
      imports: [IconsModule],
    });
    fixture = TestBed.createComponent(MobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
