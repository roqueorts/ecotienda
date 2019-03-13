import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styles: []
})
export class AdminProductsComponent implements OnInit {
  productos: any;
  loading = true;

  constructor(private productosService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.productosService.getProductos().subscribe(productos => {
      // console.log(productos);
      setTimeout(() => {
        this.loading = false;
        this.productos = productos;
      }, 3000);

      console.log(productos);
    });
  }

  ngOnInit() {}

  delete(key: string) {
    this.productosService.borrarProducto(key).subscribe(result => {
      if (result) {
        console.error(result);
      } else {
        // todo bien
        delete this.productos[key];
      }
      console.log(result);
    });
  }
}
