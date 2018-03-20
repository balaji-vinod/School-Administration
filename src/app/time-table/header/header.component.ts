import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../time-table.service';
import { TimeTableTo } from '../time-table.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private timeTableService: TimeTableService) { }

  ngOnInit() {
  }

  showPeriods(i) {
    this.timeTableService.getTimeTableTeacher(i, 11).subscribe(
      (timeTableTo: TimeTableTo) => (this.timeTableService.onDateChanged.emit(timeTableTo)),
      (error) => alert(error)
    );
  }

}
