import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public infoService: InfopageService) { }

  ngOnInit(): void {
  }

}
