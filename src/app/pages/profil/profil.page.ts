import {Component, OnInit} from '@angular/core';
import {movieListKey} from "../../services/my-list.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor() {
  }

  async ngOnInit() {
  }

  protected readonly movieListKey = movieListKey;
}
