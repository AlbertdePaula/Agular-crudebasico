import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }
  creteProdutc(): void {
    this.productService.create(this.product).subscribe (() =>{
      this.productService.showMessage('Produto inserido!')
      this.router.navigate(['/products'])
    })

    //this.productService.showMessage('Operação executada com sucesso!!')
  }
}
