import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerviewallComponent } from './passengerviewall/passengerviewall.component';
import { UspublicComponent } from './uspublic/uspublic.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerviewallComponent,
    UspublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
