import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';

import { StickyNavModule } from 'ng2-sticky-nav';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    NotFoundComponent,
    SideBarComponent,
    LoginComponent,
    SettingsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
