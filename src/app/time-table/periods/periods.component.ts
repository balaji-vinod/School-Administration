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
    var date = new Date().getDay();
    this.timeTableService.getTimeTableTeacher((date  > 0 && date  < 6) ? date : 1, 1).subscribe(
      (timeTableTo: any) => (this.timeTableTo = timeTableTo),
      (error) => alert(error)
    );
    this.timeTableService.onDateChanged.subscribe(
      (timeTableTo: any) => (this.timeTableTo = timeTableTo)
    );
  }

}
