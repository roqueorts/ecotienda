import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { ConfigService } from '../../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  endpoint: String;

  // Se ejecuta antes de renderizar
  constructor(
    private _ConfigService: ConfigService,
    private _productsService: ProductsService,
    private router: Router
  ) {}

  // Se ejecuta cuando la página está ya renderizada
  ngOnInit() {
    this._ConfigService.getConfig().subscribe((data: String) => {
      console.log('La url es ' + data['defaultUrl']);
      this.endpoint = data['defaultUrl'];
    });
    // this._productsService
    //   .getProducts(this.endpoint)
    //   .subscribe((data: Product[]) => {
    //     this.products = data['Products'];
    //   });
    this.products = this._productsService.getProductsOld();
    console.log(this.products);
  }
  verProduct(idx: number) {
    this.router.navigate(['/product', idx]);
  }
}
