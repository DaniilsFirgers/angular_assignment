import { Component, Input, OnInit } from '@angular/core';
import { ActiveCarAds } from '../../../services/get.data';
import { DeleteCarAdd } from '../../../services/delete.data';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  brands: string[] = ['Mercedes', 'BMW', 'Audi', 'All'];
  posts: any;
  filteredPosts: any;
  selectedBrand: string = 'All';

  constructor(
    private carAds: ActiveCarAds,
    private carDeleteAdd: DeleteCarAdd
  ) {}

  ngOnInit(): void {
    this.carAds.getPosts().subscribe((res) => {
      if (res.status == 200) {
        console.log(res);
        this.posts = res.body;
        this.filteredPosts = this.posts;
      } else {
        console.log(res);
      }
    });
  }
  async onCarDeleteHandle(eventData: { car: any }) {
    this.carDeleteAdd
      .deleteCar(eventData.car)
      .subscribe((res) => console.log('res', res));
    this.carAds.getPosts().subscribe((res) => {
      if (res.status == 200) {
        console.log(res);
        this.posts = res.body;
      } else {
        console.log(res);
      }
    });
  }
  filterPosts(e: Event) {
    const brand = (e.target as HTMLSelectElement).value;
    this.selectedBrand = brand;
    console.log(this.selectedBrand);

    if (this.selectedBrand === 'All') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(
        (el: any) => el.brand === this.selectedBrand
      );
    }
  }
}
