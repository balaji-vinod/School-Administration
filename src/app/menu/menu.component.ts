import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  changeActive(event) {
    var navItem = document.getElementsByClassName('nav-link');
    for (var j = 0; j < navItem.length; j++) {
      navItem[j].className = navItem[j].className.replace(" active", "");
    }
    event.target.className += " active";
  }

}
