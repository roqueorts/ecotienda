import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeEs);

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios

import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ProductTarjetaComponent } from './components/product-tarjeta/product-tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AboutComponent, FooterComponent, ProductsComponent, ProductComponent, RegisterComponent, SearchComponent, ProductTarjetaComponent, LoadingComponent, AccountComponent],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [ProductsService, { provide: LOCALE_ID, useValue: 'es' }, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
