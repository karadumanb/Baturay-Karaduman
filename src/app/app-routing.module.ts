import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SettingsComponent} from './components/settings/settings.component';
import {TranslateModule} from '@ngx-translate/core';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: DetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'settings', component: SettingsComponent},
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
