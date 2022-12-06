import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/shared/models/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public schedule!: Schedule;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.schedule = this.route.snapshot.data['schedule'];
  }
}
