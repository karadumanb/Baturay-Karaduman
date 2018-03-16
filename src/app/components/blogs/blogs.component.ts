import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { SharedService } from '../../services/shared.service';
declare var $ :any;
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent implements OnInit {
  blogs:Blog[] = [];
  constructor(public shared:SharedService) { 
    
  }

  ngOnInit() {
    this.shared.getBlogs().subscribe(res=>{
      console.log(res);
    });
  }

  accord($event) {
    let isActive = $event.target.classList.contains("active");
    if($event.target.classList.contains("accordion")){
      let acc = document.getElementsByClassName('accordion');
      for(let i = 0; i<acc.length; i++){
        if(acc[i].classList.contains("active")){
          acc[i].classList.remove("active");
          let theElement = acc[i].nextElementSibling as HTMLElement;
          theElement.style.maxHeight = null;
        }
      }
      if(!isActive){
        $event.target.classList.add("active");
        let openPx = $event.target.nextElementSibling.scrollHeight;
        $('.active + .panel').css('max-height', openPx + 'px');
      }
    }
  }
}
