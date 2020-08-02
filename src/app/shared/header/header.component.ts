import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { InfopageService } from '../../services/infopage.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private infoService: InfopageService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    Swal.fire({allowOutsideClick: false, icon: 'info', text: 'Espere por favor...'});
    Swal.showLoading();
    this.infoService.login(this.usuario)
    .subscribe(resp => {
      console.log(resp);
      Swal.close();
      if (this.recordarme) {
        localStorage.setItem('email', this.usuario.email);
      }
      this.router.navigateByUrl('/productos');
    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({icon: 'error', title: 'Error al autenticar', text: err.error.error.message});
    });
  }

  onRegister(register: NgForm): void {
    if (register.invalid) {
      return;
    }
    Swal.fire({allowOutsideClick: false, icon: 'info', text: 'Espere por favor...'});
    Swal.showLoading();
    this.infoService.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp);
      Swal.close();
      if (this.recordarme) {
        localStorage.setItem('email', this.usuario.email);
      }
      this.router.navigateByUrl('/productos');
    }, (err) => {
      console.log(err.error.message);
      Swal.fire({icon: 'error', title: 'Error al autenticar', text: err.error.error.message});
    });
  }

  salir() {
    this.infoService.logout();
    this.router.navigateByUrl('/');
  }
}
