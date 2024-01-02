import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchControl = new FormControl();
  results$!: Observable<any>;
  imageBaseUrl: string = environment.images;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(query => this.movieService.searchMovies(query))
    );
  }
}
