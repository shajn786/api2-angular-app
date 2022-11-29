import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent {

  constructor(private api : ApiService)
  {
    api.fetchQoutes().subscribe(

     (response)=>
     {
        this.data = response
     }

    )
  }

  data:any =[]

}
