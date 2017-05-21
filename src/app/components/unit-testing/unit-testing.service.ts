import { Injectable } from '@angular/core';

@Injectable()
export class UnitTestingService {

    items = [];

    constructor() {
        this.items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7' +
                      'item 8', 'item 9', 'item 10'];
    }

    getItems(numOfItems: number) {
        let resultArray = [];

        // hvis numOfItems i paramteren er større end længden på arrayet, bliver den sat til længden af arrayet
        if (numOfItems > this.items.length) {
            numOfItems = this.items.length;
        }

         // Returnerer et array med det antal af items der er bestemt af numOfItems
         for (let i = 0; i < numOfItems; i++) {
             resultArray.push(this.items[i]);
         }

         return resultArray;
    }
}
