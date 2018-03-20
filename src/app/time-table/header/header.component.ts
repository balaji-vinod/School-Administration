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
    var tablinks = document.getElementsByClassName('tablinks');
    tablinks[new Date().getDay() -1].className += " active";
  }

  showPeriods(event, i) {
    var tablinks = document.getElementsByClassName('tablinks');
    for (var j = 0; j < tablinks.length; j++) {
      tablinks[j].className = tablinks[j].className.replace(" active", "");
    }
    event.target.className += " active";
    this.timeTableService.getTimeTableTeacher(i, 11).subscribe(
      (timeTableTo: TimeTableTo) => (this.timeTableService.onDateChanged.emit(timeTableTo)),
      (error) => alert(error)
    );
  }

}
