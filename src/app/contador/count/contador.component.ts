import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  public title: string = 'Contador App';
  numero: number = 10;
  base: number = 50;
  acumular(value: number) {
    this.numero += value;
    if (this.numero <= 0) this.numero = 0;
    console.log('hola');

    // this.numero <= 0 ? (this.numero = 0) : '';
  }
}
