import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  categorias: any[] = [];
  productos_ecoferia: any[] = [];
  capacitaciones: any[] = [];
  ferias: any[] = [];
  userToken: string;
  // Sign Up
  private signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key';
  // Login
  private loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key';
  // Apikey
  private apikey = 'AIzaSyCKIZthGbWPwO9oORJ5GpcuSRDNU_f-PEk';

  constructor(private http: HttpClient) {
    this.cargarCategorias();
    this.cargarProductos();
    this.cargarCapacitaciones();
    this.cargarFerias();
    this.leerToken();
  }


  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.loginUrl}=${this.apikey}`, authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.signupUrl}=${this.apikey}`,
    authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
  }

  private guardarToken (idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
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

  estaAutenticado(): boolean {

    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
