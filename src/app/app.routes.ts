import { Routes } from '@angular/router';
import { Movies } from './pages/movies/movies';
import { Repertoire } from './pages/repertoire/repertoire';
import { Home } from './pages/home/home';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { movieDetailResolver } from './core/resolvers/movie-detail.resolver';

export const routes: Routes = [
    {path: 'movies', component: Movies, title : "Cinema | Movies"},
    {path: 'repertoire', component: Repertoire, title : "Cinema | Repertoire"},
    {path: 'home', component: Home, title : "Cinema | Home"},
    {
        path: 'movie/:id',
        component : MovieDetail,
        resolve: { movie : movieDetailResolver },
        title : "Cinema | Movie"
    },
    {path: '', redirectTo: 'home', pathMatch: 'full' }
];

