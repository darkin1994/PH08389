import { Component, OnInit } from '@angular/core';
import { ListProduct } from '../ListProduct';
import { Product } from '../Product';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
    data = ListProduct ;
  prodetail: Product;
  constructor() { }

  ngOnInit(): void {
  }
  xoasp(product: Product): void {
    this.data = this.data.filter( function(value) {
        return value !== product;
    });
  }
  xem(product: Product): void {
    this.prodetail = product;
  }
  thoat(): void {
    this.prodetail = null;
  }
}
