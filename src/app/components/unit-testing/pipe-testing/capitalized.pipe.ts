import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // Dette navn er brugt i HTML dokumentet til at referere til denn pipe
  name: 'capitalize'

})

export class CapitalizePipe implements PipeTransform {

  transform(value: string) {
    // Returner det første bogstav med stort + resten af string'en
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
