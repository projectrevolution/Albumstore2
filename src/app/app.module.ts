import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  },

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDescriptionComponent,
    ProductPageComponent,
    ProductTracklistingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
