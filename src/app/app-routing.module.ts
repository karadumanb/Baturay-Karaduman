import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {TranslateModule} from '@ngx-translate/core';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: DetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    TranslateModule.forRoot()
  ]
})
export class AppRoutingModule { }
