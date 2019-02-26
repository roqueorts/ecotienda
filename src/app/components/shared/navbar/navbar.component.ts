import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { log } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public logueado: string;
  constructor(private router: Router, public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    // console.log('Hola');
    this.logueado = localStorage.getItem('isLoggedIn');
    console.log('Logueado = ' + localStorage.getItem('isLoggedIn'));
  }

  login() {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

  account() {
    this.router.navigate(['/account']);
  }

  buscarProducto(textoSearch: string) {
    console.log(textoSearch);
    this.router.navigate(['/resultado', textoSearch]);
  }
}
