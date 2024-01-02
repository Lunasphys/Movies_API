import { Component, OnInit } from '@angular/core';
import {MyListService} from "../../services/my-list.service";
import { Storage } from '@ionic/storage-angular';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {

  movies$ = this.myListService.getMovies();
  imageBaseUrl: string = environment.images;

  constructor(
    private myListService: MyListService,
    private storage: Storage
  ) { }
  removeFromList(movie: any) {
    this.myListService.removeMovie(movie);
  }
  async ngOnInit() {
    await this.storage.create();
  }

}
