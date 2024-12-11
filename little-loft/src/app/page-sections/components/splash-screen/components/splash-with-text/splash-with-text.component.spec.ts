import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashWithTextComponent } from './splash-with-text.component';

describe('SplashWithTextComponent', () => {
  let component: SplashWithTextComponent;
  let fixture: ComponentFixture<SplashWithTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashWithTextComponent]
    });
    fixture = TestBed.createComponent(SplashWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
