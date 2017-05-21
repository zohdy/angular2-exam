import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
})

export class RoutingComponent {

  // Router objektet bruges til at få fat på 'navigate()' funktionen
  constructor(private router: Router) {}
  // Håndterer knappen som sender en videre til '/route-with-param/:id'
  goToRoute(userInput) {
    this.router.navigate(['/route-with-param', userInput]);
  }

}
