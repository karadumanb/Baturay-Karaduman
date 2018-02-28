import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SharedService {

  stickyNavigation: boolean = true;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
    translate.use('en');
    console.log(translate.currentLang);
  }


}
