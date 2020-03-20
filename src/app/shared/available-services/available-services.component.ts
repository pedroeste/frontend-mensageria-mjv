import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.scss']
})
export class AvailableServicesComponent implements OnInit {

  availableServices = [
    { id: 1, name: "Adesão" },
    { id: 2, name: "Oferta" },
    { id: 3, name: "Gestão de Conteúdo" },
    { id: 4, name: "Montagem" },
    { id: 5, name: "Disparo" },
    { id: 6, name: "Rastreio" },
    { id: 7, name: "Monitoração" },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.availableServices)
  }

}
