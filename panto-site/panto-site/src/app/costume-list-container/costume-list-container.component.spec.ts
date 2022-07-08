import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeListContainerComponent } from './costume-list-container.component';

describe('CostumeListContainerComponent', () => {
  let component: CostumeListContainerComponent;
  let fixture: ComponentFixture<CostumeListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
