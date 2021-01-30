import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    constructor(private LogService: LogService){}
    count: number = 0;

    increase () {
        this.count++
        this.LogService.log("Increace: " + this.count)
    }

    decrease() {
        this.count--
        this.LogService.log("Decreace: " + this.count)
    }
}
