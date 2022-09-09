import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualInputGroupComponent } from './dual-input-group.component';

describe('DualInputGroupComponent', () => {
  let component: DualInputGroupComponent;
  let fixture: ComponentFixture<DualInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualInputGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
