import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { CodeListComponent } from './views/code-list/code-list.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
},{
  path:"products",
  component: ProductCrudComponent
},{
  path: "product-create",
  component: ProductsCreateComponent
},{
  path:"order-create",
  component: OrderCreateComponent
},{
  path: "orders",
  component: OrdersComponent
},{
  path: "schedule",
  component: ScheduleComponent
},{
  path: "code-list",
  component: CodeListComponent
},{
  path: "order-create",
  component: OrderCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }