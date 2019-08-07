import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  productsResult: Product[];
  constructor(private _ProductsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.productsResult = this._ProductsService.buscarProductos(params['textoBuscador']);
      // for (const prod of this.productsResult) {
      // console.log(prod);
      // }
    });
  }
  // verProduct(indice) {
  //   this.router.navigate(['/product', indice]);
  // }
}
