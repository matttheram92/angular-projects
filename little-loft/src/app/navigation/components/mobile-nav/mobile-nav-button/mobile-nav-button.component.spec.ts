import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavButtonComponent } from './mobile-nav-button.component';
import { MOBILE_NAV_BUTTONS } from '../consts/mobile-nav.consts';
import { IconsModule } from '@app/icons/icons.module';

describe('MobileNavButtonComponent', () => {
  let component: MobileNavButtonComponent;
  let fixture: ComponentFixture<MobileNavButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavButtonComponent],
      imports: [IconsModule],
    });
    fixture = TestBed.createComponent(MobileNavButtonComponent);
    component = fixture.componentInstance;
    component.mobileNav = MOBILE_NAV_BUTTONS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
