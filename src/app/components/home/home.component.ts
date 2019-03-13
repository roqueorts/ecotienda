import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  // Se ejecuta antes de renderizar
  constructor(private _productsService: ProductsService, private router: Router) {}

  // Se ejecuta cuando la página está ya renderizada
  ngOnInit() {
    // this.products = this._productsService.getProducts();
    // console.log(this.products);
  }
  // verProduct(idx: number) {
  // this.router.navigate(['/product', idx]);
  //  }
}
