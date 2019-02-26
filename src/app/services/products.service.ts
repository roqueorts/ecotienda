import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Para filtrar el resultado

@Injectable()
export class ProductsService {
  private headers;
  private productsCarrrito: Product[];
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ Authentication: 'ncniu43fj34$%mdik3' });
    this.cargarStorage();
  }
  private products: Product[] = [
    {
      nombre: 'Muesli',
      bio: 'Cereales muy buenos',
      img: 'assets/img/cereales1.jpg',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
    {
      nombre: 'Copos',
      bio: 'Cereales muy buenos',
      img: 'assets/img/cereales2.jpg',
      aparicion: '1939-05-01',
      casa: 'DC'
    },
    {
      nombre: 'Copos',
      bio: 'Cereales muy buenos',
      img: 'assets/img/cereales3.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Copos',
      bio: 'Cereales muy buenos',
      img: 'assets/img/cereales4.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Copos',
      bio: 'Cereales muy buenos',
      img: 'assets/img/cereales3.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Copos',
      bio: 'Cereales muy buenos',
      img: 'assets/img/cereales3.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Copos',
      bio: 'Cereales muy buenos',
      img: 'assets/img/cereales3.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    }
  ];

  /**
   * getProducts
   */
  public getProductsOld(): Product[] {
    return this.products;
  }

  /**
   * getProducts from BACKEND
   */
  public getProducts(endpoint: String) {
    // return this.products;
    return this.http.get('http://localhost:8080/product', this.headers);
    // Ejemplo de uso de map, para filtrar
    // this.http.get('http://localhost:8080/product', this.headers).pipe( map ( data => data['artistas']));
  }

  public getProduct(idx: string): string {
    return this.products[idx];
  }

  /** Buscar Productos */

  public buscarProductos(termino: string): Product[] {
    const productsArr: Product[] = [];

    termino = termino.toLowerCase();

    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      const nombre = product.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        product.idx = i;
        productsArr.push(product);
      }
    }
    return productsArr;
  }

  /** Agregar producto al carrito */
  public setProduct(idx: string) {
    this.productsCarrrito.push(this.products[idx]);
    // guardar en localStorage
    this.guardarStorage();
  }
  public guardarStorage() {
    localStorage.setItem('productsCarrrito', JSON.stringify(this.productsCarrrito));
  }
  public cargarStorage() {
    if (localStorage.getItem('productsCarrrito')) {
      this.productsCarrrito = JSON.parse(localStorage.getItem('productsCarrrito'));
    } else {
      this.productsCarrrito = [];
    }
  }
}

export interface Product {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}
