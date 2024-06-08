import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsService} from "./services/products.service";
import {JsonPipe} from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, JsonPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    private readonly productSvc = inject(ProductsService);
    products = this.productSvc.products;
}
