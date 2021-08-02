import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from './stores.model';
@Injectable({
  providedIn: 'root'
})
export class StoresService {
  stores = new BehaviorSubject<Store[]>([]);
  constructor(private http: HttpClient) { }
  getStores() {
    this.http.get<{ message: string, data: Store[] }>(`${environment.api_uri}/stores`).subscribe(
      res => this.stores.next(res.data),
      err => console.log(err)
    );
  }
  deleteStore(_id: string) {
    this.http.delete<{ message: string, deletedCount: number }>(`${environment.api_uri}/stores/${_id}`).subscribe(
      res => {
        this.getStores();
      },
      err => console.log(err)
    )
  }
  addStore(store: Store) {
    this.http.post(`${environment.api_uri}/stores/add_store`, store).subscribe(res => {
      console.log(res)
      this.getStores();
    });

  }
  search(searchValue: string) {
    return this.http.get<{ message: string, data: Store[] }>(`${environment.api_uri}/stores/search?q=${searchValue}`)
  }
  editStore(store: Store, id: string) {
    return this.http.patch(`${environment.api_uri}/stores/${id}`, store).subscribe(res => {
      console.log(res)
      this.getStores()
    })
  }
}
