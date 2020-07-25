import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  date: number = new Date().getDate();
  day: number = new Date().getDay();
  constructor( public infopageService: InfopageService ) { }

  ngOnInit(): void {
  }

}
