import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class ActiveCarAds {
  private url = 'http://localhost:3001/cars?token=dfg232345jkfjnm48393';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url, {observe: 'response'});
  }
  
}