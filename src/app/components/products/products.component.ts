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
  products; // :  Product[] = [];
  endpoint: String;

  // Se ejecuta antes de renderizar
  constructor(
    private _ConfigService: ConfigService,
    private _productsService: ProductsService,
    private router: Router
  ) {}

  // Se ejecuta cuando la página está ya renderizada
  ngOnInit() {
    // console.log(comp.endpoint);
    this._ConfigService.getConfig().subscribe(data => {
      console.log('La url es aaa ' + data['defaultUrl']);
      this.endpoint = data['defaultUrl'];
    });
    console.log('La url es dfdf  ' + this.endpoint);
    this._productsService
      .getProducts(this.endpoint)
      .subscribe((data: Product[]) => {
        console.log('Data es: ' + data);
        this.products = data;
      });
    //  //this.products = this._productsService.getProductsOld();
    // console.log(this.products);
  }
  verProduct(idx: number) {
    this.router.navigate(['/product', idx]);
  }
}
