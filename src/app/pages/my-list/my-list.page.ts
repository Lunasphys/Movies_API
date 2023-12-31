import { Component, OnInit } from '@angular/core';
import {MyListService} from "../../services/my-list.service";

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {

  movies$ = this.myListService.getMovies();

  constructor(private myListService: MyListService) { }
  removeFromList(movie: any) {
    this.myListService.removeMovie(movie);
  }
  ngOnInit() {
  }

}
