import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent {

  // ngIf : boolean variablen bundet til ngIf
  showElement: boolean = true;

  // ngFor : Bliver brugt til Toggle knappen for ngFor
  showList: boolean =  false;

  // ngFor : arrayList brugt til ngFor 
  myList: any[] = ['elementOne', 'elementTwo', 'elementThree', 'elementFour', 5, 6, 7, 8, 9, true];

  // Bliver brugt ifm. ngClass i HTML dokumentet. 
  isStyled: boolean = false;

  // brugt i ngStyle
  fontStyle = 'italic';
  fontSize = '30px';

  // ngIf Toggle button
  toggleNgIf() {
    // Skifter imellem 'true' / 'false' på boolean værdien 'showElement'
    this.showElement = !this.showElement;
  }

  // ngFor - vis elementerne i Arraylisten 
  showListElements() {
      // Skifter imellem 'true' / 'false' på boolean værdien 'showElements'
      this.showList = !this.showList;
  }

  // ngClass toggler
  toggleNgClass() {
    // Skifter boolean værdien defineret i denne klasse
    this.isStyled = !this.isStyled;
  }

  toggleNgStyle() {
    if (this.fontStyle === 'italic') {
        this.fontStyle = '';
        this.fontSize = '';
    } else if (this.fontStyle !== 'italic') {
             this.fontStyle = 'italic';
             this.fontSize = '30px';
    }

  }

}
