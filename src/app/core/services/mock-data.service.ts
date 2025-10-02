import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  id: number;
  title: string;
  durationMin: number;
  poster?: string;
  synopsis?:string;
  actors:number[];
}

export interface Repertoire {
  id: number;
  date: string;      
  movies: number[];  
}

export interface Projection {
  id: number;
  movieId: number;
  repertoireId: number,
  time: string;      
  hall: string;
}
export interface Actor {
  id: number;
  name: string;
}


@Injectable({ providedIn: 'root' })
export class MockDataService {
  readonly movies = signal<Movie[]>([]);
  readonly repertoire = signal<Repertoire[]>([]);
  readonly projections = signal<Projection[]>([]);
  readonly actors = signal<Actor[]>([]);

  private http = inject(HttpClient);

  constructor() {
    this.loadActors();
    this.loadMovies();
    this.loadRepertoire();
    this.loadProjections();
  }

  loadActors(){
    this.http.get<Actor[]>('/assets/mock/actors.json')
      .subscribe({
        next: data => this.actors.set(Array.isArray(data) ? data : []),
        error: err => {console.error('Failed to load actors.json', err);
          this.actors.set([]);
        }
      });
  }

  loadMovies() {
    this.http.get<Movie[]>('/assets/mock/movies.json').subscribe({
      next: data => this.movies.set(Array.isArray(data) ? data : []),
        error: err => {console.error('Failed to load movies.json', err);
        this.movies.set([]);
        }
    });
  }
  
  loadRepertoire() {
    this.http.get<Repertoire[]>('/assets/mock/repertoire.json').subscribe({
      next: data => this.repertoire.set(Array.isArray(data) ? data : []),
      error: err => {
        console.error('Failed to load repertoire.json', err);
        this.repertoire.set([]);
      }
    });
  }

  loadProjections() {
    this.http.get<Projection[]>('/assets/mock/projections.json').subscribe({
      next: data => this.projections.set(Array.isArray(data) ? data : []),
      error: err => {
        console.error('Failed to load projections.json', err);
        this.projections.set([]);
      }
    });
  }

  getActorById(id: number): Actor | undefined {
    return this.actors().find(a => a.id === id);
  }
  
  getMovieById(id: number): Movie | undefined {
    return this.movies().find(m => m.id === id);
  }

  getProjectionById(id: number): Projection | undefined{
    return this.projections().find(a=>a.id===id);
  }

  getProjectionsByMovieAndRepertoire(movieId : number, repertoireId: number){
    return this.projections().filter(p => p.movieId === movieId && p.repertoireId === repertoireId);
  }

  addMovie(movie: Movie) {
    this.movies.set([...this.movies(), movie]);
  }

  updateMovie(updated: Movie) {
    this.movies.set(this.movies().map(m => m.id === updated.id ? updated : m));
  }

  removeMovie(id: number) {
    this.movies.set(this.movies().filter(m => m.id !== id));
  }

  addProjection(p: Projection) {
    this.projections.set([...this.projections(), p]);
  }

  addRepertoireEntry(entry: Repertoire) {
    this.repertoire.set([...this.repertoire(), entry]);
  }
}