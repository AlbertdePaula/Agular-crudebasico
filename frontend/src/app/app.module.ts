import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Componetes Material Designe
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//Componentes do projeto
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { CodeListComponent } from './views/code-list/code-list.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//Exemplos das aulas
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductsCreateComponent } from './components/products/product-create/products-create.component';
import { FormsModule } from '@angular/forms';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
//import { ProductRead2Component } from './components/products/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { from } from 'rxjs';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    OrdersComponent,
    ScheduleComponent,
    CodeListComponent,
    RedDirective,
    ForDirective,
    OrderCreateComponent,
    ProductsCreateComponent,
    ProductReadComponent,
    //ProductRead2Component,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  },
  {
    provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
