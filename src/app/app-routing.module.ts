import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { FairsComponent } from './pages/fairs/fairs.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'ferias', component: FairsComponent },
  { path: 'capacitaciones', component: TrainingsComponent },
  { path: 'categorias', component: CategoriesComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'productos', component: ProductsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
