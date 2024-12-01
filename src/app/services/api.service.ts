import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiKey = '63125a29ee0d7071d8f52561bd0158db'; 
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

/*
  fetchPeliculas(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
*/
fetchPeliculas(): Observable<any> {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  return this.http.get<any>(url);
}

  fetchDetallePelicula(id: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  buscarPelis(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any>(url);
  }

  fetchTrailer(id: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
