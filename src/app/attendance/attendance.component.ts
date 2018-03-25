import { Component, OnInit } from '@angular/core';
import { StudentData } from './models/studentdata';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {


  private studentdataArray: StudentData[] = [
    new StudentData('../../assets/amy-adams.jpg', 'amy adams', 'BV-001'),
    new StudentData('../../assets/brahmanandam.JPG', 'brahmanandam', 'BV-002'),
    new StudentData('../../assets/chiru.jpg', 'chiru', 'BV-003'),
    new StudentData('../../assets/gal-gadot.jpg', 'gal gadot', 'BV-004'),
    new StudentData('../../assets/kamal.jpg', 'kamal', 'BV-005'),
    new StudentData('../../assets/pawan.jpg', 'pawan', 'BV-006'),
    new StudentData('../../assets/priya.jpg', 'priya', 'BV-007'),
    new StudentData('../../assets/rajinikanth.jpg', 'rajinikanth', 'BV-008'),
    new StudentData('../../assets/Sunny_Leone.jpg', 'Sunny Leone', 'BV-009'),
    new StudentData('../../assets/vadivelu.jpg', 'vadivelu', 'BV-010'),
  ];

  constructor() { }

  ngOnInit() {
  }

  present(i) {
    document.getElementById("studentdiv" + i).style.background = 'lightgreen';

  }

  absent(i) {
    document.getElementById("studentdiv" + i).style.background = 'red';

  }

}
