import { Vendor } from '../vendor/vendor.class';

export class Product {
    id: number;
    vendor: Vendor;
    partNumber: string;
    name: string;
    price: number;
    unit: string

    constructor() {
        this.id = 0;
        this.price = 0;
    }
}