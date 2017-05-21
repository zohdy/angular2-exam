import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-routing-with-param',
  templateUrl: './routing-with-param.component.html',
})
export class RoutingWithParamComponent implements OnInit {

    private paramId: string;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
      // activatedRoute har en 'params' property som er en observable.
      // der subscribes til denne og param['id'] til den lokale variabel paramId, som bruges i viewet
      this.activatedRoute.params.subscribe(param => {
          this.paramId = param['id'];
        });
    }

    goBack() {
      this.router.navigate(['/routing']);
    }
}
