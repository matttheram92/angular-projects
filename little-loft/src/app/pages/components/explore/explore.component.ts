import { Component, OnInit } from '@angular/core';
import { DashboardInfo } from '../../../page-sections/components/dashboard/models/dashboard.models';
import { EXPLORE_DASHBOARD_DATA } from './consts/explore.consts';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  public exploreDashboardInfo: DashboardInfo = EXPLORE_DASHBOARD_DATA;

  ngOnInit(): void {}
}
