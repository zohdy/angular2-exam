import { Component } from '@angular/core';


@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})

export class FormsTemplateComponent {
    myEmail: string = 'zohdy@me.com';

    onSubmit(value: any) {
        console.log(value);
    }
}
