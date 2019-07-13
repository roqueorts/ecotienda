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
import { ChatService } from './services/chat.service';

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
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { EditProductComponent } from './components/admin/admin-products/edit-product.component';
import { KeysPipe } from './pipes/keys.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialDesignComponent } from './components/material-design/material-design.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    RegisterComponent,
    SearchComponent,
    ProductTarjetaComponent,
    LoadingComponent,
    AccountComponent,
    AdminProductsComponent,
    EditProductComponent,
    KeysPipe,
    ChatComponent,
    LoginComponent,
    MaterialDesignComponent,
    MapaComponent,
    NgDropFilesDirective
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJnc7TRaIPhGeS8-575HcR6uFps3N8YOI'
    }),
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [ProductsService, { provide: LOCALE_ID, useValue: 'es' }, AuthService, AuthGuardService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
