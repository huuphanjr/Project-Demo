import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products = [
    {
      name: 'IPhone 14 Pro Max',
      description: '/assets/img/iphone-14-pro-max.png',
      thumbnail: '   iPhone 14 Pro From $999or $41.62/mo.per month for 24 mo.months',
      price: '$'+1099,
      quantity: 2,
    },
    {
      name: 'IPhone 14',
      description: '/assets/img/iphone-14.png',
      thumbnail: '  iPhone 14 From $799or $33.29/mo.per month for 24 mo.months',
      price: '$'+799,
      quantity: 2,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
