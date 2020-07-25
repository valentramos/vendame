import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  categorias: any[] = [];
  productos: any[] = [];
  capacitaciones: any[] = [];
  ferias: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarCategorias();
    this.cargarProductos();
    this.cargarCapacitaciones();
    this.cargarFerias();
  }

  private cargarCategorias() {
    this.http.get('https://vendame-d7a95.firebaseio.com/categorias.json')
      .subscribe((resp: any) => {
        this.categorias = resp;
        console.log(resp);
      });
  }

  private cargarProductos() {
    this.http.get('https://vendame-d7a95.firebaseio.com/productos.json')
      .subscribe((resp: any) => {
        this.productos = resp;
        console.log(resp);
      });
  }

  private cargarCapacitaciones() {
    this.http.get('https://vendame-d7a95.firebaseio.com/capacitaciones.json')
      .subscribe((resp: any) => {
        this.capacitaciones = resp;
        console.log(resp);
      });
  }

  private cargarFerias() {
    this.http.get('https://vendame-d7a95.firebaseio.com/ferias.json')
      .subscribe((resp: any) => {
        this.ferias = resp;
        console.log(resp);
      });
  }
}
