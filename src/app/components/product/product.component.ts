import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.product = productsService.getProduct(params['id']);
      console.log(this.product.nombre);
    });
  }

  ngOnInit() {}
}
