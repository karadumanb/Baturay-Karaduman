import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Blog } from '../models/blog.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {

  apiUrl: string = 'http://localhost:3000';
  endpoint: string = this.apiUrl + 'apis/my-blog';

  constructor(public translate: TranslateService, private http: HttpClient) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
    translate.use('en');
    console.log(translate.currentLang);
  }
  getBlogs(): Observable<Blog[]> {
    return this.http.get(this.endpoint).map(res => {
      return res['data'].doc as Blog[];
    });
  }

  createBlog(blog: Blog): Observable<any> {
    return this.http.post(this.endpoint, blog);
  }

  deleteBlog(id: string): any {
    return this.http.delete(this.endpoint + id);
  }

  editBlog(blog: Blog): any {
    return this.http.put(this.endpoint, blog);
  }
}
