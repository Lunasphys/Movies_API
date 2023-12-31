import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyListService {
  private movies = new BehaviorSubject<any[]>([]);

  getMovies() {
    return this.movies.asObservable();
  }

  addMovie(movie: any) {
    const currentMovies = this.movies.getValue();
    this.movies.next([...currentMovies, movie]);
  }

  removeMovie(movie: any) {
    const currentMovies = this.movies.getValue();
    this.movies.next(currentMovies.filter(m => m.id !== movie.id));
  }

}
