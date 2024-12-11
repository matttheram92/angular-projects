import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavButtonComponent } from './mobile-nav-button.component';

describe('MobileNavButtonComponent', () => {
  let component: MobileNavButtonComponent;
  let fixture: ComponentFixture<MobileNavButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavButtonComponent]
    });
    fixture = TestBed.createComponent(MobileNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
