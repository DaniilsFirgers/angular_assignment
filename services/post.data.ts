import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostCarAdd {
  private url = 'http://localhost:3001/cars?token=dfg232345jkfjnm48393';
   
  constructor(private httpClient: HttpClient) { }
  
  postCar(car: any){
    return this.httpClient.post(this.url, car)
  }
  
}