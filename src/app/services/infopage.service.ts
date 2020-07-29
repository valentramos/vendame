import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  categorias: any[] = [];
  productos_ecoferia: any[] = [];
  capacitaciones: any[] = [];
  ferias: any[] = [];
  //Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.cargarCategorias();
    this.cargarProductos();
    this.cargarCapacitaciones();
    this.cargarFerias();
  }


  logout() {

  }

  login(usuario: UsuarioModel) {

  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKIZthGbWPwO9oORJ5GpcuSRDNU_f-PEk', authData);
  }

  private cargarCategorias() {
    this.http.get('https://vendame-d7a95.firebaseio.com/productos_ecoferia/categorias.json')
      .subscribe((resp: any) => {
        this.categorias = resp;
        console.log(resp);
      });
  }

  private cargarProductos() {
    this.http.get('https://vendame-d7a95.firebaseio.com/productos_ecoferia/productos_ecoferia.json')
      .subscribe((resp: any) => {
        this.productos_ecoferia = resp;
        console.log(resp);
      });
  }

  private cargarCapacitaciones() {
    this.http.get('https://vendame-d7a95.firebaseio.com/productos_ecoferia/capacitaciones.json')
      .subscribe((resp: any) => {
        this.capacitaciones = resp;
        console.log(resp);
      });
  }

  private cargarFerias() {
    this.http.get('https://vendame-d7a95.firebaseio.com/productos_ecoferia/ferias.json')
      .subscribe((resp: any) => {
        this.ferias = resp;
        console.log(resp);
      });
  }
}
