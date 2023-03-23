import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeleteCarAdd} from "../../../services/delete.data"
import {ActiveCarAds} from "../../../services/get.data"


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  @Input()
  car: any

  constructor(private deleteCar: DeleteCarAdd, private carAds:ActiveCarAds) {}
  selectedDCar: any;
  @Output() carToDelete = new EventEmitter<{car: any}>
  onDeleteCar (car: any){
    this.carToDelete.emit({car: car})
  }


}
