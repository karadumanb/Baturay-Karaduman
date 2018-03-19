import { Component, OnInit } from '@angular/core';
import Blog from '../../models/blog.model';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
declare var $ :any;
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent implements OnInit {
 // blogs:Blog[] = [];
  public newBlog: Blog = new Blog()

  blogs: Blog[];
  constructor(public shared:SharedService, private router: Router) { 
    
  }

  ngOnInit() {
   this.shared.getBlogs().subscribe(res=>{
      this.blogs = res;
    });
  }

  deleteBlog(blog: Blog) {
    if(confirm('Are you sure to delete this post permenantly?')){
      this.shared.deleteBlog(blog._id).subscribe(res => {
        this.blogs.splice(this.blogs.indexOf(blog), 1);
      });
    }
  }

  navigateBlog(blog) {
    this.shared.editBlogs.push(blog);
    this.router.navigate(['/blog']);
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
