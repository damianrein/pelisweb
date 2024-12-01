import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/models/pelicula';
import { ApiService } from 'src/app/services/api.service';

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
peliculas: Pelicula[] = []; 
constructor(private apiService: ApiService) {}

ngOnInit(): void {
  this.cargarPeliculas();
}

cargarPeliculas(): void {
  this.apiService.fetchPeliculas().subscribe({
    next: (data) => (this.peliculas = data.results), 
    error: (error) => console.error('Error al cargar películas:', error),
  });
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
