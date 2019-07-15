import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../../../interfaces/producto.interface';
import { ProductsService } from '../../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: []
})
export class EditProductComponent implements OnInit {
  public producto: Producto = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  private nuevo = false;
  private id: string;
  constructor(private productosService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.id = parametros['id'];
      if (this.id !== 'nuevo') {
        this.productosService.getProducto(this.id).subscribe(producto => (this.producto = <Producto>producto));
      }
    });
  }

  ngOnInit() {}
  guardar() {
    console.log(this.producto);

    if (this.id === 'nuevo') {
      // insertando
      this.nuevo = true;
      this.productosService.nuevoProducto(this.producto).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/edit-product', data.name]); // name es el id
        },
        err => {
          console.error(err);
        }
      );
    } else {
      // actualizando
      this.productosService.actualizarProducto(this.producto, this.id).subscribe(
        (data: any) => {
          console.log(data);
        },
        err => {
          console.error(err);
        }
      );
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['edit-product', 'nuevo']);
    forma.reset({ casa: 'Marvel' });
  }
}
