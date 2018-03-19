import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import Blog from '../../models/blog.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  blogs: Blog[];
  constructor(public shared: SharedService) { }

  ngOnInit() {
    this.shared.getBlogs().subscribe(res=>{
      this.blogs = res;
    });
  }

}
