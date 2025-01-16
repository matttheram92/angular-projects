import { Component, Injector, Input, OnInit } from '@angular/core';
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
  standalone: false,
})
export class DashboardComponent implements OnInit {
  @Input()
  public dashboardInfo!: DashboardInfo;
  public injectors: {
    currentComponentType: DashboardComponentsUnion;
    currentInjector: Injector;
  }[] = [];

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.injectors = this.dashboardInfo.sections.map((s) => ({
      currentComponentType: this.getComponentType(s.type),
      currentInjector: this.getInjector(s),
    }));
  }

  private getComponentType(type: DashboardTypes): DashboardComponentsUnion {
    return DASHBOARD_COMPONENTS[type];
  }

  private getInjector<T extends DashboardSection>(section: T): Injector {
    return Injector.create({
      providers: [{ provide: 'sectionData', useValue: section }],
      parent: this.injector,
    });
  }
}
