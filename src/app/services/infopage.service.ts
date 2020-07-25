import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  productos: any[] = [];
  capacitaciones: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
    this.cargarCapacitaciones();
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
}
