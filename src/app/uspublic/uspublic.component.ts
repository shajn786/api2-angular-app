import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-uspublic',
  templateUrl: './uspublic.component.html',
  styleUrls: ['./uspublic.component.css']
})
export class UspublicComponent {
  
  constructor(private api :ApiService){
    api.fetchUsPublic().subscribe(
      
      (response)=>{
        this.data=response

      }

    )

  }

 data:any = []
}
