import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ResetComponent } from './component/reset/reset.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';
import { DetailsComponent } from './component/details/details.component';

const appRoutes: Routes=[
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component: ResetComponent},
  {path:'details',component:DetailsComponent},
  {path:'details/:object', component:DetailsComponent},
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
