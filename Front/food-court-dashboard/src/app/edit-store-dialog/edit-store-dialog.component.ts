import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoresService } from '../stores/stores-service.service';
import { Store } from '../stores/stores.model';

@Component({
  selector: 'app-edit-store-dialog',
  templateUrl: './edit-store-dialog.component.html',
  styleUrls: ['./edit-store-dialog.component.css']
})
export class EditStoreDialogComponent implements OnInit, OnChanges {

  storeForm!: FormGroup;
  @Input() store!: Store;
  constructor(private storesSrevice: StoresService) { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.storeForm = new FormGroup({
      StoreName: new FormControl(this.store?.StoreName, Validators.required),
      StoreDescription: new FormControl(this.store?.StoreDescription, Validators.required),
      StoreLogo: new FormControl(this.store?.StoreLogo, Validators.required),
    })

  }

  onSumbit() {
    this.storesSrevice.editStore(this.storeForm.value, this.store._id)
    // this.storeForm.reset();
  }
  get storeControls() {
    return this.storeForm.controls;
  }
}


