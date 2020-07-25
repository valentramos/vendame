import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  constructor(public infoService: InfopageService) { }

  ngOnInit(): void {
  }

}
