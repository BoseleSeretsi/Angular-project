import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = 
[{ path: 'nav', component: NavbarComponent },
{ path: 'home', component: HomepageComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'product', component: ProductsComponent },
{ path: 'cart', component: CardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
