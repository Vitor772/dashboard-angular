import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashShopApiService } from '../dash-shop-api.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  shopList$!:Observable<any[]>

  constructor(private service:DashShopApiService) { }

  ngOnInit(): void {
    this.shopList$ = this.service.getShopList();
  }

}
