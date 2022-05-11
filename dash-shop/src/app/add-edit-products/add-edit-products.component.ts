import { Component, OnInit } from '@angular/core';
import { DashShopApiService } from '../dash-shop-api.service';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {

  constructor(private service:DashShopApiService) { }

  ngOnInit(): void {
  }

}
