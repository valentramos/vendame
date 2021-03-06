import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { HomeComponent } from './pages/home/home.component';
import { FairsComponent } from './pages/fairs/fairs.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    TrainingsComponent,
    CategoriesComponent,
    ProductItemComponent,
    HomeComponent,
    FairsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
