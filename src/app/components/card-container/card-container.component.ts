import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
 /*
  constructor(){}
  ngOnInit(): void {
    
  }
 */
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

}
