import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './stores/stores.component';

const routes: Routes = [
  { path: '', redirectTo: '/stores', pathMatch: "full" },
  { path: 'stores', component: StoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
