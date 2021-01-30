import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  count: number = 0;

    increase () {
        this.count++
    }

    decrease() {
        this.count--
    }
}
