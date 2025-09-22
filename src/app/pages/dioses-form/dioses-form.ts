import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dioses-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dioses-form.html',
  styleUrls: ['./dioses-form.css']
})
export class DiosesForm {
  formularioDioses: FormGroup;
  name: FormControl;
  symbol: FormControl;
  domain: FormControl;
  power: FormControl;
  city: FormControl;

  constructor() {
    this.name = new FormControl('', Validators.required);
    this.symbol = new FormControl('', Validators.required);
    this.domain = new FormControl('', Validators.required);
    this.power = new FormControl('', [Validators.required, Validators.max(9000)]);
    this.city = new FormControl('', Validators.required);

    this.formularioDioses = new FormGroup({
      nameG: this.name,
      symbolG: this.symbol,
      domainG: this.domain,
      powerG: this.power,
      cityG: this.city
    });

    // Suscripciones para que los errores desaparezcan solos
    this.autoHideError(this.name);
    this.autoHideError(this.symbol);
    this.autoHideError(this.domain);
    this.autoHideError(this.power);
    this.autoHideError(this.city);
  }

  verSubmit() {
    console.log(this.formularioDioses.value);
  }

  // Método reutilizable para ocultar mensajes de error automáticamente
  autoHideError(control: FormControl, delay: number = 3000) {
    control.statusChanges.subscribe(status => {
      if (status === 'INVALID' && control.touched) {
        setTimeout(() => {
          control.markAsUntouched(); // quita el touched para que desaparezca el mensaje
        }, delay);
      }
    });
  }
}
