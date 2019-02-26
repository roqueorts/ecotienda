import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { ConfigService } from '../../config/config.service';
import { Router } from '@angular/router';
import { timeout } from 'q';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  endpoint: String;
  loading: boolean;
  error: boolean;

  // Se ejecuta antes de renderizar
  constructor(private _ConfigService: ConfigService, private _productsService: ProductsService, private router: Router) {
    this.loading = true;
    this.error = false;
  }

  // Se ejecuta cuando la página está ya renderizada
  ngOnInit() {
    // Llamada a back
    // this._productsService.getProducts('').subscribe(
    //   (data: any) => {
    //     console.log('Data es: ' + data);
    //     this.products = data;
    //   }, // Para manejar errores
    //   errorServicio => {
    //     this.error = true;
    //     console.log(errorServicio.error.mensaje);
    //   }
    // );

    setTimeout(() => {
      this.products = this._productsService.getProductsOld();
      this.loading = false;
    }, 2000);

    // console.log(this.products);
  }
  verProduct(idx: number) {
    this.router.navigate(['/product', idx]);
  }
}
