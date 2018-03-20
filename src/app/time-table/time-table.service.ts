import { EventEmitter, Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { TimeTableTo } from './time-table.model';

@Injectable()
export class TimeTableService {

  onDateChanged = new EventEmitter<TimeTableTo>();

  constructor(private http: Http) { }

  getTimeTableTeacher(day:number, teacherId:number) {
    return this.http.get('/api/timetable/teacher/'+teacherId+"/"+day).map(response => response.json());
  }


}
