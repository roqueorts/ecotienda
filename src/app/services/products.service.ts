import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
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
  // constructor() {
  //   // console.log('Servicio listo para usar!');
  // }

  /**
   * getProducts
   */
   public getProductsOld(): Product[] {
     return this.products;
   }

  public getProducts(endpoint: String) {
    // return this.products;
    return this.http.get(endpoint + 'products');
  }

  public getProduct(idx: string): string {
    return this.products[idx];
  }
}

export interface Product {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
