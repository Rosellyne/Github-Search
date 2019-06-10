
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    private clientdetails: string = 'f6df3d84a335a2d6be9baa66c3b843c94b18edc2';
    private username: string;
    private repo: string;

  constructor(private http: HttpClient) {
    console.log('am ready to start');
    this.username = 'Rosellyne';
    this.repo = '';
  }
  getProfile(): any {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token' = + this.clientdetails)
    .pipe(map(res => res));
  }
  getRepos(): any {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token '= + this.clientdetails)
    .pipe(map(res => res));
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
