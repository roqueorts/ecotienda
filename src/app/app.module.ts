import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios

import { ProductsService } from './services/products.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
