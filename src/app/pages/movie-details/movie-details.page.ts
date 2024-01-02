import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import {MyListService} from "../../services/my-list.service";
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: any | null = null;
  imageBaseUrl = environment.images;
  private alertController: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private myListService: MyListService
  ) {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Added to My List',
      buttons: ['OK']
    });

    await alert.present();
  }

  dismiss() {
    this.alertController.dismiss();
  }

  // async presentAlert() {
  //   const alert = await Dialog.alert({
  //     title: 'Success',
  //     message: 'Movie added to your list',
  //   });
  // }

  addToList() {
    this.myListService.addMovie(this.movie);
    this.presentAlert();
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      console.error('Movie ID is null');
    } else {
      this.movieService.getMovieDetails(id).subscribe((res) => {
        this.movie = res;
      });
    }
  }
}
