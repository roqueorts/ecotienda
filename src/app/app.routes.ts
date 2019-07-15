import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
// import { PageNotFoundComponent } from './';
import { SearchComponent } from './components/search/search.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AccountComponent } from './components/account/account.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] }, // El canActivate se pone para las paginas que no queremos que se entre si no estamos logueados, lo quitaremos del register
  { path: 'product/:id', component: ProductComponent },
  { path: 'resultado/:textoBuscador', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  //   { path: '**', component: PageNotFoundComponent }

  // { path: 'path/:routeParam', component: MyComponent },
  // { path: 'staticPath', component: ... },
  // { path: '**', component: ... },
  // { path: 'oldPath', redirectTo: '/staticPath' },
  // { path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// @NgModule({
//   imports: [RouterModule.forChild(ROUTES)],
//   exports: [RouterModule]
// })
// export class FeatureRoutingModule {}
