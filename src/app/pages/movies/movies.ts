import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, Movie } from '../../core/services/mock-data.service';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ActorNamesPipe } from '../../core/pipes/actor-names.pipe';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule, ActorNamesPipe],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})

export class Movies {
  private mockDataService = inject(MockDataService);
  
  isExpanded = false;
  
  movies$: Observable<Movie[]> = this.mockDataService.getAllMovies();
  
 
}