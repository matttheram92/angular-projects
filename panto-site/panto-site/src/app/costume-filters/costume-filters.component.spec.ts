import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeFiltersComponent } from './costume-filters.component';

describe('CostumeFiltersComponent', () => {
  let component: CostumeFiltersComponent;
  let fixture: ComponentFixture<CostumeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
