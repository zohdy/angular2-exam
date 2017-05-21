import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    // navnet 'filter' bliver brugt i pipes.component.html dokumentet til at aktivere denne pipe
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(values, searchTerm) {
        // Tjekker om brugeren har indtastet noget i søgefeltet 
        if (searchTerm === undefined) {
            // Hvis ikke, returnes alle værdierne
            return values;
        }
        /* 'Filter' er en indbygget Javascript funktion. Den går igennem hver eneste index
            i arryet og kører en callback funktion for hver enkelt element */
        return values.filter(function(currentValue) {
          /*   currentValue bliver sammelignet med searchTerm efter begge er 
               konverteret til lower case 
               Returner en boolean. Ved en 'true' værdi bliver 'currentValue' i array'et,
               ved false bliver den fjernet. */
            return currentValue.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
}
