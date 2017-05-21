import { Component, OnInit } from '@angular/core';
import { UnitTestingService } from './unit-testing.service';



@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  providers: [UnitTestingService]
})

export class UnitTestingComponent implements OnInit {

  itemList = [];
  testService: UnitTestingService;

  constructor(private service: UnitTestingService) {}

  ngOnInit() {
    this.itemList = this.service.getItems(5);
  }

}
