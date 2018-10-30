export class Menu {
    display: string;
    route: string; 
    title:string;

    constructor(display: string, route: string, title: string) {
        this.route = route;
        this.display = display;
        this.title = title;
    }
}