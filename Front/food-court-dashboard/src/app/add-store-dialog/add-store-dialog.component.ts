import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoresService } from '../stores/stores-service.service';
import { Store } from '../stores/stores.model';

@Component({
  selector: 'app-add-store-dialog',
  templateUrl: './add-store-dialog.component.html',
  styleUrls: ['./add-store-dialog.component.css']
})
export class AddStoreDialogComponent implements OnInit {
  storeForm!: FormGroup;
  constructor(private storesSrevice: StoresService) { }

  ngOnInit(): void {
    this.storeForm = new FormGroup({
      StoreName: new FormControl("", Validators.required),
      StoreLogo: new FormControl("", Validators.required),
      StoreDescription: new FormControl("", Validators.required),
    })

  }
  onSumbit() {
    this.storesSrevice.addStore(this.storeForm.value)
    this.storeForm.reset();
  }
  get storeControls() {
    return this.storeForm.controls;
  }
}
