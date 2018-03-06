import {Component, HostListener, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {TranslateService} from '@ngx-translate/core';


declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean = true;


  constructor(public translate: TranslateService, public shared: SharedService) {

  }

  ngOnInit() {

    }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const number =  document.documentElement.scrollTop;
    if (number > 600 || number < 50) {
      $('nav').fadeIn();
    } else {
      $('nav').fadeOut();
    }
  }


  toggleLang() {
    if (this.translate.currentLang === 'en'){
      this.translate.use('tr');
    } else {
      this.translate.use('en');
    }
  }
}
