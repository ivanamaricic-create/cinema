import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
  
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/assets/mock/movies.json');
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return this.http.get<Movie[]>('/assets/mock/movies.json').pipe(
      map((movies) => movies.find(m => m.id === id))
    )
  }
  
  getAllActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>('/assets/mock/actors.json');
  }
  
  getAllRepertoire(): Observable<Repertoire[]> {
    return this.http.get<Repertoire[]>('/assets/mock/repertoire.json');
  }

  getAllProjections(): Observable<Projection[]> {
    return this.http.get<Projection[]>('/assets/mock/projections.json');
  }

  getActorById(id : number):Observable<Actor | undefined> {
    return this.http.get<Actor[]>('/assets/mock/actors.json').pipe(
      map((actors) => actors.find(a => a.id === id))
    );
  }

  getProjectionsById(id : number):Observable<Projection | undefined> {
    return this.http.get<Projection[]>('/assets/mock/projections.json').pipe(
      map((projections) => projections.find(p => p.id === id))
    );
  }

  getProjectionsByMovieAndRepertoire(movieId: number, repertoireId: number): Observable<Projection[]> {
    return this.getAllProjections().pipe(
      map(projections =>
        projections.filter(
          p => p.movieId === movieId && p.repertoireId === repertoireId
        )
      )
    );
  }
  
  getActorNamesByIds(ids: number[]): Observable<string[]> {
    return this.getAllActors().pipe(
      map(actors => actors
        .filter(actor => ids.includes(actor.id))
        .map(actor => actor.name)
      )
    );
  }
}