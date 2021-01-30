import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    count: number = 0;

    increase () {
        this.count++
    }

    decrease() {
        this.count--
    }
}
