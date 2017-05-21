import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-selector',
  templateUrl: './child.component.html',
})

export class ChildComponent {
    @Input() parentData: string;
    @Output() childChanged = new EventEmitter();

    onChange(userInput: string) {
      // Metoden bliver triggered vha. keyup og sender en emitter childChanged() eventet i parent HTML dokumentet  
      this.childChanged.emit(userInput);
    }
}
