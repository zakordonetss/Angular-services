import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
    providers: [LocalCounterService]
})
export class AppComponent {
    constructor(
        public CounterService: CounterService,
        public LocalCounterService: LocalCounterService
        ) {}
}
