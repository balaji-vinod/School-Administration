import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../time-table.service';
import { TimeTableTo } from '../time-table.model';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.css']
})
export class PeriodsComponent implements OnInit {

  timeTableTo:TimeTableTo[] = null;

  constructor(private timeTableService : TimeTableService) { }

  ngOnInit() {
    this.timeTableService.getTimeTableTeacher(1, 11).subscribe(
      (timeTableTo: any) => (this.timeTableTo = timeTableTo),
      (error) => alert(error)
    );
    this.timeTableService.onDateChanged.subscribe(
      (timeTableTo: any) => (this.timeTableTo = timeTableTo)
    );
  }

}
