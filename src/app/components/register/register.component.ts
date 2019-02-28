import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: 'roque',
      apellido: 'orts'
    },
    correo: 'roqueorts@gmail.com'
    // pasatiempos: ['correr', 'bailar', 'dormir']
  };

  constructor() {
    // console.log(this.usuario);

    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, this.noOrts])
      }),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      pasatiempos: new FormArray([new FormControl('correr', Validators.required)]),
      username: new FormControl('', Validators.required, this.existeUsuario.bind(this)),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });

    // this.forma.setValue(this.usuario);
    // this.forma.controls['password2'].setValidators([Validators.required, this.noIgual2.bind(this)]); otra forma
    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual]);
    // this.forma.valueChanges.subscribe(data => console.log(data)); // valueChanges devuelve un observador al que me puedo subscribir.
    this.forma.controls['username'].valueChanges.subscribe(data => console.log(data));
    this.forma.controls['username'].statusChanges.subscribe(data => console.log(data));
  }

  ngOnInit() {}

  guardar() {
    console.log(this.forma.value);
    console.log(this.forma);

    // this.forma.reset();
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('', Validators.required));
    // (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('Dormir', Validators.required));
  }

  noOrts(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'orts') {
      return {
        noorts: true
      };
    }
    return null;
  }

  noIgual2(control: FormControl): { [s: string]: boolean } {
    // console.log(this);

    if (control.value !== this.forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    } else {
      return null;
    }
  }

  noIgual = (control: FormControl): { [s: string]: boolean } => {
    if (control.value !== this.forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    } else {
      return null;
    }
    // tslint:disable-next-line:semicolon
  };

  existeUsuario(control: FormControl) {
    const obs = new Observable(observer => {
      setTimeout(() => {
        if (control.value === 'strider') {
          observer.next({ existe: true });
          observer.complete();
          return observer;
        } else {
          observer.next(null);
          observer.complete();
          return observer;
        }
      }, 1000);
    });

    return obs;
  }
}
