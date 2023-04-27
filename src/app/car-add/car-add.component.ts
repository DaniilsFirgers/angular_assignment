import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostCarAdd } from '../../../services/post.data';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent {
  @Input() model = '';
  yearProduction: number = 2020;
  price: number = 0;
  selectedBrand = 'Mercedes';
  selectedCondition = 'Used';
  description: string = '';

  formSubmitted = false;
  constructor(private addCar: PostCarAdd) {}

  onBrandSelected(value: string): void {
    this.selectedBrand = value;
  }
  onConditionSelected(value: string): void {
    this.selectedCondition = value;
  }
  onSubmitForm() {
    this.formSubmitted = true;

    const newCar = {
      id: uuidv4(),
      brand: this.selectedBrand,
      model: this.model,
      year_of_production: this.yearProduction,
      price: this.price,
      condition: this.selectedCondition,
      description: this.description,
    };

    if (newCar.brand === '' || newCar.description === '' || newCar.model === '')
      return;
    if (newCar.price <= 0) return;
    if (newCar.year_of_production > 2023) return;

    this.addCar.postCar(newCar).subscribe((res) => console.log(res));
    this.model = '';
    this.price = 0;
    this.selectedBrand = 'Mercedes';
    this.selectedCondition = 'Used';
    this.description = '';
    this.yearProduction = 2020;
  }
}
