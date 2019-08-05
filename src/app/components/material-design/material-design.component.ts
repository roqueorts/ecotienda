import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.css']
})
export class MaterialDesignComponent implements OnInit {
  public estaSobre: boolean;
  public prueba; // La variable archivos que cambie en la directiva, se actualizará aquí
  constructor() {}

  ngOnInit() {
    this.estaSobre = false;
  }

  pruebaSobreElemento(evento) {
    this.estaSobre = evento;
    console.log(evento);
  }

  // @HostListener('dragover', ['event'])
  // public onDragEntere(event: any) {
  //   console.log('Se ejecuta');
  // }
}
