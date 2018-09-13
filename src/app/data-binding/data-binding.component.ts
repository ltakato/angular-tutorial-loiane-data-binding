import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loianetraining.com';
  cursoAngular = true;
  urlImagem = 'https://picsum.photos/200/300\n';

  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  handleClick() {
    alert('clicado');
  }

  onKeyUp(valor) {
    this.valorAtual = valor;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
