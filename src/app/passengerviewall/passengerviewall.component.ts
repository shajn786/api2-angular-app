import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passengerviewall',
  templateUrl: './passengerviewall.component.html',
  styleUrls: ['./passengerviewall.component.css']
})
export class PassengerviewallComponent {

  constructor(private api :ApiService)
  {
      api.fetchData().subscribe(

        (response)=>
        {
          this.passenger = response
        }
      )
  }

passenger :any =[]

}
