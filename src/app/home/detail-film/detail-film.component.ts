import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { IMDBFilmDetailType } from '../imdb.type';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AddToPlaylist } from '../playlist.state';

@Component({
  selector: 'app-detail-film',
  standalone: false,
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.css',
})
export class DetailFilmComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription(); 
  filmDetail: IMDBFilmDetailType | null = null;
  isAdded = false;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Ambil detail film
      const filmDetailSub = this.filmService.getFilmDetail(id).subscribe((res) => {
        this.filmDetail = res.result ?? null;

        if (this.filmDetail) {
          // untuk cek apakah film sudah ada di playlist
          const playlistSub = this.store
          .select((state) => state.playlist.films)
          .subscribe((films: IMDBFilmDetailType[]) => {
            this.isAdded = films.some(
              (film: IMDBFilmDetailType) => film.imdbID === this.filmDetail?.imdbID
            );
          });

          this.subscription.add(playlistSub); 
        }
      });
      this.subscription.add(filmDetailSub); 
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/']);
  }

  addToPlaylist() {
    if (this.filmDetail) {
      console.log('Tambah ke Playlist:', this.filmDetail);
      this.store.dispatch(new AddToPlaylist(this.filmDetail));
      this.isAdded = true; 
    } else {
      console.error('FilmDetail tidak tersedia!');
    }
  }
}
