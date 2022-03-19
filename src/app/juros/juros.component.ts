import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  lista = [];

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {}

  getJuros() {
    return this.vp * (1 + (this.j / 100) * this.n);
  }

  getJurosComposto() {
    for (let i = 1; i <= this.n; i++) {
      let jurosSimples = this.vp * (1 + (this.j / 100) * this.n);
      let jurosComposto = this.vp * (1 + this.j / 100) ** i;
      this.lista.push({
        simples: jurosSimples,
        composto: jurosComposto,
        periodo: i,
      });
    }
    return this.lista;
  }
}
