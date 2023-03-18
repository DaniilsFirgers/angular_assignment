import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {

  }

  links = [{route: "/", name: "Home"}, {route: "/cars", name: "Cars"}, {route: "/about", name: "About"}]
}
