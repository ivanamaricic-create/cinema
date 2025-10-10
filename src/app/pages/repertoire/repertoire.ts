import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-repertoire',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './repertoire.html',
  styleUrls: ['./repertoire.css']
})

export class Repertoire {
  private mockDataService = inject(MockDataService);
  readonly repertoire = this.mockDataService.repertoire;


  getMovie(id: number) {
  return this.mockDataService.getMovieById(id);
  }

  getProjections(movieId: number, repertoireId: number) {
    return this.mockDataService.getProjectionsByMovieAndRepertoire(movieId, repertoireId) || [];
  }

}