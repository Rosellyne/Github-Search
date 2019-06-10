
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    apiUrl = environment.apiUrl;
    private username: string;
    private repo: string;

  constructor(private http: HttpClient) {
    console.log('am ready to start');
    this.username = 'Rosellyne';
    this.repo = '';
  }
  getProfile(): any {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token =ca67b4a50368288ef9eb1983082946b449dc7bce')
    .pipe(map(res => res));
  }
  getRepos(): any {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token =ca67b4a50368288ef9eb1983082946b449dc7bce')
    .pipe(map(res => res));
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
