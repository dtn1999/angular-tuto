import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items: any[] = [];
  constructor(private http: HttpClient) {}

  getItems() {
    return this.items;
  }

  addToCart(product: any) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
