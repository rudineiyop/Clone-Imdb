import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { IMDBListType } from './imdb.type';
import { IMDBFilmDetailType } from './imdb.type';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  ApiUrl = 'https://api.collectapi.com/imdb/imdbSearchByName';
  DetailUrl = 'https://api.collectapi.com/imdb/imdbSearchById';

  constructor(private http: HttpClient) {}

  getAllFilm(param: Params){
    return this.http.get<{ result: IMDBListType[]}>(this.ApiUrl, {
      params: param
    })
  }
  getFilmDetail(id: string) {
    return this.http.get<{ result: IMDBFilmDetailType }>(`${this.DetailUrl}`, {
      params: { movieId: id },
    });
  }

}