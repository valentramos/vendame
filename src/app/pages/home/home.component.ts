import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public infoService: InfopageService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto( termino: string ) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
