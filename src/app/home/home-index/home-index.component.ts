import { Component } from '@angular/core';
import { IMDBListType } from '../imdb.type';
import { FilmService } from '../film.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  imports: [RouterModule],
  styleUrl: './home-index.component.css',
})
export class HomeIndexComponent {
  filmCollections: IMDBListType[] = [];

  params: Params = {}

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ){
    this.route.parent?.queryParamMap.subscribe((param) => {
      if(param.has('query')) {
        this.params['query'] = param.get('query')
      } else {
        this.params['query'] = 'marvel'
      }
      this.filmService.getAllFilm(this.params).subscribe((res) => {
        if(res) this.filmCollections = res.result ?? []
      })
    })
  }
}