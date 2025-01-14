import { Component, Injector, Input } from '@angular/core';
import {
  DashboardInfo,
  DashboardSection,
  DashboardTypes,
} from './models/dashboard.models';
import {
  DASHBOARD_COMPONENTS,
  DashboardComponentsUnion,
} from './consts/dashboard.consts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent {
  @Input()
  public dashboardInfo!: DashboardInfo;

  constructor(private injector: Injector) {}

  public getComponentType(type: DashboardTypes): DashboardComponentsUnion {
    return DASHBOARD_COMPONENTS[type];
  }

  public getInjector<T extends DashboardSection>(section: T): Injector {
    return Injector.create({
      providers: [{ provide: 'sectionData', useValue: section }],
      parent: this.injector,
    });
  }
}
