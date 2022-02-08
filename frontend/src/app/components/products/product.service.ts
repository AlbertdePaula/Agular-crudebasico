import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private MatSnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.MatSnackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'

    })
  }

  create (product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

}
