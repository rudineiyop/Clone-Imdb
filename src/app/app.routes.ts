import { Routes } from '@angular/router';
import { PlaylistComponent } from './home/playlist/playlist.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
    },
];
