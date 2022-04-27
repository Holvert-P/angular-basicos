import { Component } from '@angular/core';

@Component({
  selector: 'heroe-component',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  public title: string = 'Heroe Component';
  nombre: string = 'IronMan';
  edad: number = 45;
  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get NombreCapitalizador(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Capitan America';
  }
  cambiarEdad(): void {
    this.edad = 100;
  }
}
