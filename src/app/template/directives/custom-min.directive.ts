import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
  selector: '[customMin][ngModel]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true
  }]
})
export class CustomMinDirective implements Validators {

    // recibir del padre
    @Input() minimo!: number;

    constructor() {
        console.log('Directiva', this.minimo);
    }

    // El control es el input
    validate( control: FormControl ) {
        const inputValue = control.value;
        console.log(`inputValue`, inputValue);
        console.log(`minimo`, this.minimo);

        // error customMin en true para error, null no error
        return ( inputValue < this.minimo ) ? { 'customMin': true } : null;
    }

}