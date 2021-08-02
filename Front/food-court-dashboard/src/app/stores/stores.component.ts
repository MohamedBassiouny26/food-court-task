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
  constructor(private storesService: StoresService) { }

  ngOnInit(): void {
    this.storesService.getStores().subscribe(
      res => this.stores = res.data,
      err => console.log(err)
    )
  }

}
