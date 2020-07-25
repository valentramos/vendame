import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public infoService: InfopageService) { }

  ngOnInit(): void {
  }

}
