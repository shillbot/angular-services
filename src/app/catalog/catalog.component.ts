import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";
import { CartService } from "@core/cart.service";
import { Observable } from "rxjs";

@Component({
	selector: "bot-catalog",
	templateUrl: "./catalog.component.html",
	styleUrls: ["./catalog.component.css"]
})
export class CatalogComponent {
	constructor(private productsService: ProductsService, private cartService: CartService) {}

	products: Observable<Product[]> = this.productsService.getProducts();

	addToCart(product: Product) {
		this.cartService.add(product);
	}
}
