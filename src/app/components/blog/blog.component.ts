import { Component, OnInit } from '@angular/core';
import Blog from '../../models/blog.model';
import {SharedService} from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  editBlog: Blog[] = [];
  public newBlog: Blog = new Blog();

  constructor( private shared: SharedService, private router: Router) { }

  ngOnInit() {
    if(this.shared.editBlogs.length > 0) {
      this.newBlog = this.shared.editBlogs[0];
      this.editBlog = [];
      this.editBlog.push(this.newBlog);
      this.shared.editBlogs = [];
    }
  }

  createBlog(isPublished) {
    if(this.editBlog.includes(this.newBlog)){
      this.shared.editBlog(this.newBlog).subscribe(res=> {
        this.editBlog = [];
        this.router.navigate(['/blogs']);
      }, err=> {
        alert('could not updated!')
      });
      return; 
    }
    if(this.newBlog.title.length === 0 || this.newBlog.description.length === 0){
      alert('You have to write something for both title and description');
      return;
    }
    this.newBlog.isPublished = isPublished;
    this.shared.createBlog(this.newBlog)
    .subscribe((res)=>{
      if(isPublished){
        this.newBlog = new Blog();
        this.router.navigate(['/blogs']);
      } else {
        alert('blog is succesfully saved');
      }
    });
  }

  deleteBlog() {
    if(this.newBlog.title || this.newBlog.description) {
      if(confirm("Are you sure to delete this post permenantly?")){
        this.newBlog = new Blog();
      }
    } else {
      alert('blog is already empty');
    }
  }


  
}
