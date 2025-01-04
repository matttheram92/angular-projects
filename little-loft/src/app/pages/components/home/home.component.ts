import { Component } from '@angular/core';
import { HOME_DASHBOARD_DATA } from './consts/home.consts';
import { DashboardInfo } from '../../../page-sections/components/dashboard/models/dashboard.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public homeDashboardInfo: DashboardInfo = HOME_DASHBOARD_DATA;
}
