import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent {
    // STRING interpolation
    title: string = 'hi, I am a string interpolation victim';

    // PROPERTY Binding
    imageLink: string = 'http://lorempixel.com/400/200';
    // PROPERTY Binding
    isDisabled: boolean = true;

    // STYLE Binding
    applyRedColor: boolean = true;

    // 2-Way Data Binding
    inputField: string;

    // STYLE Binding
    toggleRedColor() {
      // Skifter applyRedColor imellem true / false
      this.applyRedColor = !this.applyRedColor;
    }

    // EVENT Binding
    // userInput er referencen i HTML dokumentet 
    onClick(textFieldInput: string) {
        alert(textFieldInput);
    }
}
