import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SharedService} from '../../services/shared.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  constructor(public translate: TranslateService, public shared: SharedService) {

  }

  ngOnInit() {


  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const number =  document.documentElement.scrollTop;
    const animatedClass = $('.app-screen');
    if (number > ($('.animated-screen').offset().top - 400)) {
      animatedClass.css('display', 'block');
      animatedClass.addClass('animated fadeInUp');
      //how to stop event
    }
  }

  startSlide() {
    console.log("this works");
  }


}

