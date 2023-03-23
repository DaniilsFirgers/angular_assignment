import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PostCarAdd} from "../../../services/post.data"



@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {
  @Input()   model = ''
  yearProduction: number = 2020
  price: number = 0
  selectedBrand = 'Mercedes';
  selectedCondition = 'Used'
  description: string = ""
  constructor(private addCar: PostCarAdd) {}

	onBrandSelected(value:string): void {
		this.selectedBrand = value;
	}
  onConditionSelected(value:string): void {
		this.selectedCondition = value;
	}
  onSubmitForm(){
    const newCar = {
      id: '43',
      brand: this.selectedBrand,
      model: this.model,
      "year_of_production": this.yearProduction,
      "price": this.price,
      "condition": this.selectedCondition,
      "description": this.description
    }
    console.log(newCar)
    this.addCar.postCar(newCar).subscribe((res)=>console.log(res))
    this.model = ''
    this.price =0;
    this.selectedBrand = 'Mercedes';
    this.selectedCondition = 'Used'
    this.description = ''
    this.yearProduction = 2020
  }
}
