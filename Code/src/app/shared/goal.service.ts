import { Injectable } from '@angular/core';
import { IGoal } from '../goals/goal.model';
import { HttpClient } from '@angular/common/http';
import { ApplicationSettingsService } from './application-settings.service';

@Injectable()
export class GoalService {

  constructor(private http: HttpClient, private appSettings: ApplicationSettingsService) {
  }

  create(goal: IGoal) {
    console.log(goal);
  }

    allgoals() {
      const baseUrl = this.appSettings.getBaseUrl();
      const headers = this.appSettings.getHeaders();
      return this.http.get(`${baseUrl}/goals`, { headers });
    }
}
