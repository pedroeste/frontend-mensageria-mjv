import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  serviceOptions = [
    { id: 1, name: "Adesão" },
    { id: 2, name: "Oferta" },
    { id: 3, name: "Gestão de Conteúdo" },
    { id: 4, name: "Montagem" },
    { id: 5, name: "Disparo" },
    { id: 6, name: "Rastreio" },
    { id: 7, name: "Monitoração" },
  ]

  ngOnInit(): void {
  }

}
