import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tarjeta',
  templateUrl: './product-tarjeta.component.html',
  styleUrls: ['./product-tarjeta.component.css']
})
export class ProductTarjetaComponent implements OnInit {
  @Input() product: Product;
  @Input() indice: number;
  @Output() productSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.productSeleccionado = new EventEmitter();
  }

  ngOnInit() {}
  verProducto() {
    // this.productSeleccionado.emit(this.indice); Para el uso del output y usar la funcion verProduct del padre, pero aqui sobra con // usar el router.navigate
    this.router.navigate(['/product', this.indice]);
    // console.log(this.indice);
  }
}
