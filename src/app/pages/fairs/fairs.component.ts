import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.css']
})
export class FairsComponent implements OnInit {

  constructor(public infoService: InfopageService) { }

  ngOnInit(): void {
  }

}
