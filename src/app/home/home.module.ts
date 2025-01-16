import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '',
    component: HomeIndexComponent
  },
  {
    path: 'film/:id',
    component: DetailFilmComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
  },
]

@NgModule({
  declarations: [DetailFilmComponent],
  imports: [
    CommonModule, // Pastikan CommonModule diimpor
    RouterModule.forChild(routes),
    PlaylistComponent,
    HomeIndexComponent
  ],
})
export class HomeModule {}