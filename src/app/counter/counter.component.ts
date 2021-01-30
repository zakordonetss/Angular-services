import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { LocalCounterService } from '../services/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
  providers: [LocalCounterService]
})
export class CounterComponent {

  constructor(
        public CounterService: CounterService,
        public LocalCounterService: LocalCounterService
        ) {}
}
