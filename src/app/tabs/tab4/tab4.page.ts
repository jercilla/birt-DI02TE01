import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  adivina: number | undefined = undefined;
  respuesta: number | undefined = undefined;
  resultado: string = 'Introduce un número entre 0 y 100';
  constructor() {}

  ngOnInit() {
    this.adivina = Math.round(Math.random() * 101);
  }

  onClick() {
    if (this.respuesta == this.adivina) {
      this.resultado = 'Has acertado';
    } else {
      if (this.respuesta! < this.adivina!) {
        this.resultado = 'Introduce un número mayor';
      } else {
        this.resultado = 'Introduce un número menor';
      }
    }
  }
}
