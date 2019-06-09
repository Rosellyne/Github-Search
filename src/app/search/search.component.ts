import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private profileservice: ProfileService) {
    this.profileservice.getProfile().subscribe(profile => {
      console.log(profile);
    });
  }

  ngOnInit() {
  }

}
