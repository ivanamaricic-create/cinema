import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})

export class Movies {
  private mockDataService = inject(MockDataService);
  readonly movies = this.mockDataService.movies;

  getActorNames(actorId: number[]): string {
    return (actorId || []).map(id => this.mockDataService.getActorById(id)?.name || 'Unknown').join(', ');
  }

  isExpanded = false;
}