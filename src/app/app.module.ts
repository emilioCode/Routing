import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ResetComponent } from './component/reset/reset.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';
import { DetailsComponent } from './component/details/details.component';
import { ContactInsertComponent } from './component/contacts/contact-insert/contact-insert.component';
import { ContactComponent } from './component/contacts/contact/contact.component';
import { MenuComponent } from './component/menu/menu.component';

import { AuthService } from './services/auth.service';
import { LoggedInGuard } from './services/logged-in.guard';

const appRoutes: Routes=[
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component: ResetComponent},
  {path:'details',component:DetailsComponent},
  {path:'details/:object', component:DetailsComponent},
  {path:'contact', component:ContactComponent, children:[ //with Child routes
    {path:'form',component:ContactInsertComponent} 
  ]},
  {path: 'menu', component:MenuComponent, canActivate: [LoggedInGuard]},
  {path:'**',component: NotFoundComponent},//at last always
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    NotFoundComponent,
    AboutComponent,
    DetailsComponent,
    ContactInsertComponent,
    ContactComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
