
import { Component, OnInit } from '@angular/core';
import {ActiveCarAds} from "../../../services/get.data"

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  posts: any

  constructor(private carAds:ActiveCarAds) {}
  ngOnInit(): void {
      this.carAds.getPosts()
      .subscribe(res=>{
        console.log(res)
        this.posts = res;
      })
  }
}
