import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerviewallComponent } from './passengerviewall/passengerviewall.component';
import { UspublicComponent } from './uspublic/uspublic.component';
import { PublicApiComponent } from './public-api/public-api.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserdataComponent } from './userdata/userdata.component';
import { TodoComponent } from './todo/todo.component';
import { QouteComponent } from './qoute/qoute.component';
import { GetCoursesComponent } from './get-courses/get-courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoutes : Routes =[
  {
    path:"",component:GetCoursesComponent
  },
  {
    path:"passenger",component:PassengerviewallComponent
  },
  {
    path:"product",component:ProductListComponent
  },
  {
    path:"api",component:PublicApiComponent
  },
  {
    path:"qoutes",component:QouteComponent
  },
  {
    path:"todo",component:TodoComponent
  },
  {
    path:"userdata",component:UserdataComponent
  },
  {
    path:"userinfo",component:UserinfoComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    PassengerviewallComponent,
    UspublicComponent,
    PublicApiComponent,
    UserinfoComponent,
    ProductListComponent,
    UserdataComponent,
    TodoComponent,
    QouteComponent,
    GetCoursesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
