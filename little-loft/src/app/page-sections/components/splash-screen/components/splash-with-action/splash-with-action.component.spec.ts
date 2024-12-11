import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashWithActionComponent } from './splash-with-action.component';

describe('SplashWithActionComponent', () => {
  let component: SplashWithActionComponent;
  let fixture: ComponentFixture<SplashWithActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashWithActionComponent]
    });
    fixture = TestBed.createComponent(SplashWithActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
