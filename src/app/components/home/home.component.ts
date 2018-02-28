import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService, public shared: SharedService) { }

  ngOnInit() {
  }

  /*
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const number =  document.documentElement.scrollTop;
    if(number > 600) {
      this.shared.stickyNavigation = true;
    } else {
      this.shared.stickyNavigation = false;
    }
  }
*/
}

