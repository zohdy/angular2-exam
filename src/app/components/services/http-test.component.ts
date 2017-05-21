import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  providers: [DataService]
})
export class HttpTestComponent implements OnInit {

    items: any[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.doGET()
            .subscribe(
                data => {
                    // Konverterer dataen fra firebase til et array
                    let tempArray = [];
                        for (let key in data) {
                            if (data !== null) {
                                tempArray.push(data[key]);
                            }
                        }
                    this.items = tempArray;
                },
                error => alert(error)
            );
    };

    onSubmit(userName, email) {
         this.dataService.doPOST( {userName, email} )
                         .subscribe(
                             data => console.log(data),
                             error => alert(error)
                         );
             alert(userName + ' added to list');
    };
};
