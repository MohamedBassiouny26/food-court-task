import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store } from './stores.model';
@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient) { }
  getStores() {
    return this.http.get<{ message: String, data: Store[] }>(`${environment.api_uri}/stores`);
  }
}
