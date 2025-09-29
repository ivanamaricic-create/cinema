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
  private svc = inject(MockDataService);
  readonly repertoire = this.svc.repertoire;


  getMovie(id: number) {
  return this.svc.getMovieById(id);
  }

  getProjections(movieId: number, repertoireId: number) {
    return this.svc.getProjectionsByMovieAndRepertoire(movieId, repertoireId) || [];
  }

}