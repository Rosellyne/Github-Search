import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
profile: any[];
repos: any[];
username: string;
  constructor(private profileservice: ProfileService) {

  }
  findProfile() {
  this.profileservice.updateProfile(this.username);
  this.profileservice.getProfile().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });
  this.profileservice.getRepos().subscribe(repos => {
    console.log(repos);
 this.repos  = repos;
});
  }
  ngOnInit() {
  }

}
