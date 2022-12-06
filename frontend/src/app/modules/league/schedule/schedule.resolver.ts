import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatchService } from 'src/app/core/services/match.service';
import { Schedule } from 'src/app/shared/models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleResolver implements Resolve<Schedule> {
  constructor(private service: MatchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Schedule>|Promise<Schedule>|Schedule {
    return this.service.getSchedule(1);
  }
}
