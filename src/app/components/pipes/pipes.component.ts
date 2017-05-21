import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-selector',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
    // Brugt til STRING piping
    name: string = 'Peter Zohdy';

    // Brugt til NUMBER piping
    decimalNumber: number = 1.548;

    // Brugt til NUMBER piping
    currencyNumber: number = 8.99;

    // Brugt til DATE piping
    date = new Date();

    // Brugt til FILTER piping
    names = ['Alex', 'Børge', 'Brian', 'Carsten', 'David', 
              'Eva', 'Franck', 'Georg', 'Hans', 'Ida', 'Jacob',
              'Kristina', 'Lasse', 'Michael', 'Nanna', 'Ole', 'Peter',
              'Rasmus', 'Sara', 'Torben', 'Ulla', 'Victor', 'William',
              'Xinkai', 'Yrsa'];
}
