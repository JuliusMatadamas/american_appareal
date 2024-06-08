import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {environment} from "@envs/environment";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    // @ts-ignore
    public product = signal<Product>();
    public products = signal<Product[]>([]);
    private readonly _http = inject(HttpClient);
    private readonly _endPoint = environment.apiURL;

    constructor() {
        this.getProducts();
    }

    //getProducts
    public getProducts(): void {
        this._http.get<Product[]>(`${this._endPoint}/products?sort=desc`)
            .pipe(tap((data:Product[]) => this.products.set(data)))
            .subscribe();
    }

    //getProduct
    public getProduct(id:number) {
        this._http.get<Product>(`${this._endPoint}/products/${id}`)
            .pipe(tap((data:Product) => this.product.set(data)))
            .subscribe();
    }
}
