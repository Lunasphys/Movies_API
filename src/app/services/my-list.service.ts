import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class MyListService {
  private movies = new BehaviorSubject<any[]>([]);

  constructor(private storage: Storage) {
    this.initStorage().then(r => console.log('Storage initialized'));
    this.loadMoviesFromStorage().then(r => console.log('Movies loaded from storage'));
  }

  private async initStorage() {
    await this.storage.create();
  }

  getMovies() {
    return this.movies.asObservable();
  }

  private async saveMoviesToStorage() {
    const currentMovies = this.movies.getValue();
    const uniqueMovies = this.removeDuplicates(currentMovies);
    await this.storage.set('movies', uniqueMovies);
  }

  private removeDuplicates(movies: any[]) {
    return movies.filter((movie, index, self) =>
      index === self.findIndex(m => m.id === movie.id)
    );
  }

  addMovie(movie: any) {
    const currentMovies = this.movies.getValue();
    if (!currentMovies.some(m => m.id === movie.id)) {
      this.movies.next([...currentMovies, movie]);
      this.saveMoviesToStorage().then(r => console.log('Movies saved to storage'));
    } else {
      console.log('Ce film a déjà été ajouté.');
    }
  }

  removeMovie(movie: any) {
    const currentMovies = this.movies.getValue();
    this.movies.next(currentMovies.filter(m => m.id !== movie.id));
    this.saveMoviesToStorage().then(r => console.log('Movies saved to storage'));
  }
  private async loadMoviesFromStorage() {
    try {
      const storedMovies = await this.storage.get('movies');
      if (storedMovies) {
        this.movies.next(storedMovies);
      }
    } catch (error) {
      console.error('Error loading movies from storage:', error);
    }
  }

}
