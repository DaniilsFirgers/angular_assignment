
import { Component, OnInit } from '@angular/core';
import {ActiveCarAds} from "../../../services/get.data"
import { DeleteCarAdd} from "../../../services/delete.data"

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  posts: any

  constructor(private carAds:ActiveCarAds, private carDeleteAdd: DeleteCarAdd) {}
  ngOnInit(): void {
      this.carAds.getPosts()
      .subscribe(res=>{
        if(res.status == 200){
          console.log(res)
          this.posts = res.body;
        }
        else{
          console.log(res)
        }
      })
  }
  async onCarDeleteHandle(eventData: {car: any}){
   this.carDeleteAdd.deleteCar(eventData.car).subscribe(res=>console.log('res', res))
    this.carAds.getPosts()
      .subscribe(res=>{
        if(res.status == 200){
          console.log(res)
          this.posts = res.body;
        }
        else{
          console.log(res)
        }
      })

  }
}
