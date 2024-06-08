import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {JsonPipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../interfaces/product";

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [
        JsonPipe
    ],
    templateUrl: './details.component.html',
    styleUrl: './details.component.scss'
})
export default class DetailsComponent implements OnInit {
    private readonly productDetail = inject(ProductsService);

    constructor(private route:ActivatedRoute) {
    }

    ngOnInit(): void {
        const _id = this.route.snapshot.paramMap.get('id');
        let id:number = 0;
        if( typeof _id === "string" ) id = parseInt(_id)
        this.productDetail.getProduct(id);
    }

    product = this.productDetail.product;
}
