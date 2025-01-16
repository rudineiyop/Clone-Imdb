import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IMDBListType } from './imdb.type';

// Actions
export class AddToPlaylist {
  static readonly type = '[Playlist] Add Film';
  constructor(public payload: IMDBListType) {}
}

// export class RemoveFromPlaylist {
//   static readonly type = '[Playlist] Remove Film';
//   constructor(public payload: string) {} // imdbID
// }

// State Model
export interface PlaylistStateModel {
  films: IMDBListType[];
}

// State Definition
@State<PlaylistStateModel>({
  name: 'playlist',
  defaults: {
    films: [],
  },
})
@Injectable()
export class PlaylistState {
  @Selector()
  static getFilms(state: PlaylistStateModel): IMDBListType[] {
  return state.films;
}

  @Action(AddToPlaylist)
  add(
  { getState, patchState }: StateContext<PlaylistStateModel>,
  { payload }: AddToPlaylist
) {
  const state = getState();
  console.log('State Sebelum:', state.films); 
  console.log('Film Ditambahkan:', payload); 

  const isExist = state.films.find((film) => film.imdbID === payload.imdbID);
  if (!isExist) {
    patchState({
      films: [...state.films, payload],
    });
  }
  console.log('State Setelah:', getState().films); 
}


  // @Action(RemoveFromPlaylist)
  // remove({ getState, patchState }: StateContext<PlaylistStateModel>, { payload }: RemoveFromPlaylist) {
  //   const state = getState();
  //   patchState({
  //     films: state.films.filter((film) => film.imdbID !== payload),
  //   });
  // }
}
