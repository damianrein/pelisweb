import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input()
  pelicula!: Pelicula;

constructor(private router: Router) {}

// Función para redirigir a la página de detalles de la película
verDetalles() {
  this.router.navigate([`/movie/${this.pelicula.id}`]);
}
  ngOnInit(): void {
  }

}
