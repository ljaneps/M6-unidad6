import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})

export class CalculadoraComponent {
  operador1: number = 0;
  operador2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.operador1 + this.operador2;
  }

  restar() {
    this.resultado = this.operador1 - this.operador2;
  }

  multiplicar() {
    this.resultado = this.operador1 * this.operador2;
  }
}
