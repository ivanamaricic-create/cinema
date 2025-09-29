import { Routes } from '@angular/router';
import { Movies } from './pages/movies/movies';
import { Repertoire } from './pages/repertoire/repertoire';
import { Projections } from './pages/projections/projections';
import { Home } from './pages/home/home';
import { MovieDetail } from './pages/movie-detail/movie-detail';

export const routes: Routes = [
    {path: 'movies', component: Movies, title : "Cinema | Movies"},
    {path: 'repertoire', component: Repertoire, title : "Cinema | Repertoire"},
    {path: 'projections', component: Projections, title : "Cinema | Projections"},
    {path: 'home', component: Home, title : "Cinema | Home"},
    {path: 'movies/:id', component: MovieDetail, title : "Cinema | Movie"},
    {path: '', redirectTo: 'home', pathMatch: 'full' }

];
