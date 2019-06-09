
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    apiUrl=environment.apiUrl;
    private username: string;
    private repo: string;

  constructor(private http: HttpClient) {
    this.username = 'Rosellyne';
    this.repo = '';
  }
}
