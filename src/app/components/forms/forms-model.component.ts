import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms-model',
  templateUrl: './forms-model.component.html',
  styleUrls: ['./forms-model.component.css']
})


export class FormsModelComponent {
   userForm = new FormGroup({
       // Placeholder tekst er det første argument. Validators er det andet argument
       name : new FormControl('Peter Zohdy', [Validators.required]),
       email: new FormControl('', [Validators.required]),
       address: new FormGroup({
           street: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
           city: new FormControl(),
           // PATTERN : Første tal skal være mellem 1-9, derefter 4 ekstra tal imellem 0-9
           postalCode: new FormControl('', [Validators.pattern('^[1-9][0-9]{4}')])
       })
   });

   onSubmit() {
       console.log(this.userForm.value);
   }
}
