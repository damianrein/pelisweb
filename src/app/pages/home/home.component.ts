import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
onSubmit($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
onInputChange($event: Event) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

  busqueda: string = '';

  onBusquedaChange(busqueda: string): void {
    this.busqueda = busqueda;
    console.log('Busqueda cambiada:', this.busqueda);
  }

  onHandleSubmit(): void {
    console.log('Formulario enviado con busqueda:', this.busqueda);
  }
}
