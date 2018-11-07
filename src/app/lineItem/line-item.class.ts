import { PurchaseRequest } from "../purchase-request/purchase-request.class";
import { Product } from "../product/product.class";

export class LineItem {
    id: number;
    purchaseRequest: PurchaseRequest;
    product: Product;
    quantity: number;

    constructor() {
        this.id = 0;
        this.quantity= 0;
    }
}