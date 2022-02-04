import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOrdersCreate(): void {
    this.router.navigate(['/order-create'])
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/product-create'])
  }

}
