export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: string;
    email: string;
    isPreapproved: boolean;

    constructor() {
        this.id = 0;
        this.isPreapproved = false;
    }
}
