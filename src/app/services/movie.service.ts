import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

// Rajoutez `results` dans votre ApiResult
export interface ApiResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: any[]; // ou possibly Movie[] si vous avez une interface Movie définie
}

@Injectable({
  providedIn: 'root',
})

export class MovieService {

  constructor(private http: HttpClient) {
  }

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}`
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  getMovies() {
    return this.http.get<ApiResult>(`https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc&api_key=27a984d720b43e1df4ab675ed1edc2d3&limit=4`);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&language=en-US&query=${query}`
    ).pipe(map(response => response.results)); // Vous pouvez maintenant accéder à `response.results` sans problème
  }
}
