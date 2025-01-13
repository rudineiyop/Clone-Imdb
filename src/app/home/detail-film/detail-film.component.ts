import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { IMDBFilmDetailType } from '../imdb.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  standalone: false,
  
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.css'
})
export class DetailFilmComponent implements OnInit {
  filmDetail: IMDBFilmDetailType | null = null;
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.filmService.getFilmDetail(id).subscribe((res) => {
        this.filmDetail = res.result ?? null;
      });
    }
  }

  goHome() {
    this.router.navigate(['/']); // Pastikan route "/" diarahkan ke Home
  }
  
}