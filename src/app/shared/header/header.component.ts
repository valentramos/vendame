import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { InfopageService } from '../../services/infopage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private infoService: InfopageService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log('Formulario');
    console.log(this.usuario);
    console.log(form);
  }

  onRegister(register: NgForm): void {
    if (register.invalid) {
      return;
    }
    this.infoService.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp);
    });
  }
}
