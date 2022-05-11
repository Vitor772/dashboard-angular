import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashShopApiService {

  readonly shopAPIURL = "https://localhost:7201/api";

  constructor(private http:HttpClient) { }

  getShopList():Observable<any[]> {
    return this.http.get<any>(this.shopAPIURL + '/products')
  }

  addShop(data:any){
    return this.http.post(this.shopAPIURL + '/products', data);
  }

  updateShop(id:number|string, data:any){
    return this.http.put(this.shopAPIURL + `/products/${id}`, data)
  }
}
