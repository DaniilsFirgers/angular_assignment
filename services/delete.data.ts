import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class DeleteCarAdd {
  private url = 'http://localhost:3001/cars?token=dfg232345jkfjnm48393';
   
  constructor(private httpClient: HttpClient) { }
  
  deleteCar(car: any){
    let httpParams = new HttpParams().set('id', car.id);
    let options = { params: httpParams };

    return this.httpClient.delete(`${this.url}`, options)

  }
  
}