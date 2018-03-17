import { Component, OnInit } from '@angular/core';
import Blog from '../../models/blog.model';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  blog: Blog[];
  public newBlog: Blog = new Blog();

  constructor( private shared: SharedService) { }

  ngOnInit() {
  }

  createBlog() {
    this.shared.createBlog(this.newBlog)
    .subscribe((res)=>{
      this.blog.push(res.data)
      this.newBlog = new Blog();
    });
  }

  deleteBlog(blog: Blog) {
    this.shared.deleteBlog(blog._id).subscribe(res => {
      this.blog.splice(this.blog.indexOf(blog), 1);
    });
  }

}
