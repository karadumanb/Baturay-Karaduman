import { Component, OnInit } from '@angular/core';


declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean = true;


  constructor() {

  }

  ngOnInit() {
/*
    var waypoint = new Waypoint({
      element: document.getElementById('waypoint'),
      handler: function(direction) {
        console.log('Scrolled to waypoint!');
      }
    });

    waypoint.handler('up');
*/
    }

}
