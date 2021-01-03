import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  genres = [];

  constructor(private genreService: GenreService) {
    this.genres = genreService.getGenres();
   }

  ngOnInit(): void {
  }

}
