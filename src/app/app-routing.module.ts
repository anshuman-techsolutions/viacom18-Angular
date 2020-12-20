import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '', component: HomeComponent,

}, {
  path: 'home', component: HomeComponent,

}, {
  path: 'addItems', component: AddItemsComponent,

}, {
  path: 'listItems', component: ListItemsComponent,

},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
