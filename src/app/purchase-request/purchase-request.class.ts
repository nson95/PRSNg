import { User } from '../user/user.class';
export class PurchaseRequest {
    id: number;
    user: User;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: Date;
    reasonForRejection: string;

    constructor() {
        this.id=0;
        this.total=0;
        this.dateNeeded=null;
        this.submittedDate=null;
    }
}