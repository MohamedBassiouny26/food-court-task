import { Component, OnInit } from '@angular/core';
import { StoresService } from './stores-service.service';
import { Store } from './stores.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores: Store[] = [];
  editStore: any = undefined;
  constructor(private storesService: StoresService) { }

  ngOnInit(): void {
    this.storesService.getStores();
    this.storesService.stores.subscribe(data => this.stores = data)
    console.log(this.stores)
  }
  deleteStore(storeID: string) {
    this.storesService.deleteStore(storeID);
  }
  search(value: string) {
    this.storesService.search(value).subscribe(res => this.stores = res.data);
  }
}
