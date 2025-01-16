import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PlaylistState } from '../playlist.state';
import { IMDBListType } from '../imdb.type';
// import { RemoveFromPlaylist } from '../playlist.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist',
  imports: [CommonModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css',
})
export class PlaylistComponent {
  films$: Observable<IMDBListType[]>;
  
  constructor(private store: Store) {
    this.films$ = this.store.select(PlaylistState.getFilms);
  }
  
  // removeFilm(imdbID: string) {
  //   this.store.dispatch(new RemoveFromPlaylist(imdbID));
  // }

}
