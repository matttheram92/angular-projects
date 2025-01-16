import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { ControlsModule } from '@app/controls/contols.module';
import { IconsModule } from '@app/icons/icons.module';
import { PageSectionsModule } from '@app/page-sections/page-sections.module';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideMenuComponent],
      imports: [ControlsModule, IconsModule, PageSectionsModule],
    });
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
