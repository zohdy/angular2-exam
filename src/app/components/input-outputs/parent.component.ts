import { Component} from '@angular/core';


@Component({
  selector: 'app-parent-selector',
  templateUrl: './parent.component.html',
})

export class ParentComponent {
   // Dataen fra Child Component som skal vises i dette komponent
   childData: string;
}

