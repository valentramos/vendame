import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfopageService } from '../../services/infopage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute, public infoService: InfopageService ) { }

  ngOnInit(): void {

    // this.route.params
    // .subscribe( params => {
    //   console.log(params['termino']);
    // });

  }

}
