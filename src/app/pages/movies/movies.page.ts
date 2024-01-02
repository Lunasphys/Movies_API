import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

interface Movie {
  genre_ids: string;
  runtime: string;
  vote_average: string;
  release_date: Date ;
  poster_path: string;
    id: number;
    title: string;
}

@Component({
    selector: 'app-movies',
    templateUrl: './movies.page.html',
    styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
    movies: Movie[] = []; // Typage du tableau de films
    currentPage = 1;
    imageBaseUrl = environment.images;

    constructor(
        private movieService: MovieService,
        private loadingCtrl: LoadingController
    ) {}

    ngOnInit() {
        this.loadMovies().then(r => console.log(r));
    }

    async loadMovies(event?: InfiniteScrollCustomEvent) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading..',
            spinner: 'bubbles',
        });
        await loading.present();

        this.movieService.getTopRatedMovies(this.currentPage).subscribe(
            (res) => {
              loading.dismiss();
              this.movies.push(...res.results.slice(0, 8));

                event?.target.complete();
                if (event) {
                    event.target.disabled = res.total_pages === this.currentPage;
                }
            },
            (err) => {
                console.error(err);
                loading.dismiss();
            }
        );
    }

    loadMore(event: InfiniteScrollCustomEvent) {
        this.currentPage++;
        this.loadMovies(event).then(r => console.log(r));
    }
}


