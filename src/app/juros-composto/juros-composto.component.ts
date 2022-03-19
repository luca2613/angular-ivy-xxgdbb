import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css'],
})
export class JurosCompostoComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  lista = [];

  constructor() {}

  ngOnInit() {}

  getJurosComposto() {
    for (let i = 1; i <= this.n; i++) {
      let jurosSimples = this.vp * (1 + (this.j / 100) * this.n);
      let jurosComposto = Math.pow(this.vp * (1 + this.j / 100), i);
      this.lista.push({
        simples: jurosSimples,
        composto: jurosComposto,
        periodo: i,
      });
    }
    return this.lista;
  }
}
