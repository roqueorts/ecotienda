import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; // Para filtrar el resultado
import { of } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Key } from 'protractor';

@Injectable()
export class ProductsService {
  public productosUrl = 'https://ecoapp-b99ef.firebaseio.com/productos.json';
  public productoUrl = 'https://ecoapp-b99ef.firebaseio.com/productos/';

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

  /**
   * getClients from BACKEND
   */
  public getClients(endpoint: String): Observable<any> {
    // return this.products;
    return this.http.get<any[]>('http://localhost:8080/api/clientes');
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


  /** Pruebas FireBase */

  public nuevoProducto(producto: Producto) {
    const body = JSON.stringify(producto);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.productosUrl, body, { headers: headers }).pipe(
      map(data => {
        console.log(data);
        // console.log(data.json());
        return data;
      })
    );
  }

  public actualizarProducto(producto: Producto, key$: string) {
    const body = JSON.stringify(producto);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const url = `${this.productoUrl}/${key$}.json`;

    return this.http.put(url, body, { headers: headers }).pipe(
      map(data => {
        console.log(data);
        // console.log(data.json());
        return data;
      })
    );
  }

  getProducto(key$: string) {
    const url = `${this.productoUrl}/${key$}.json`;
    return this.http.get(url).pipe(
      map(data => {
        console.log(data);
        // console.log(data.json());
        return data;
      })
    );
  }
  getProductos() {
    return this.http.get(this.productosUrl).pipe(
      map(data => {
        /** otra forma  */
        // const result: Producto[] = [];
        // for (const key in data) {
        //   if (data.hasOwnProperty(key)) {
        //     const p = data[key];
        //     p.key = key;
        //     result.push(p);
        //   }
        // }
        return data;
      }), tap(_ => console.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }
  borrarProducto(key$: string): any {
    const url = `${this.productoUrl}/${key$}.json`;
    return this.http.delete(url).pipe(
      map(data => {
        return data; // devuelve null si ha ido bien
      })
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
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

