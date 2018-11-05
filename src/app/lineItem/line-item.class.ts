import { PurchaseRequest } from "../purchase-request/purchase-request.class";
import { Product } from "../product/product.class";

export class LineItem {
    id: number;
    prRequest: PurchaseRequest;
    product: Product

    constructor() {
        this.id = 0;
    }
}