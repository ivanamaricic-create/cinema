import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';
import { RouterModule } from '@angular/router';
import { ProjectionsPipe } from '../../core/pipes/projections.pipe';
import { MovieByIdPipe } from '../../core/pipes/movieById.pipe';

@Component({
  selector: 'app-repertoire',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectionsPipe,MovieByIdPipe],
  templateUrl: './repertoire.html',
  styleUrls: ['./repertoire.css']
})

export class Repertoire {
  private mockDataService = inject(MockDataService);
  repertoire$ = this.mockDataService.getAllRepertoire();
  movies$ = this.mockDataService.getAllMovies();
}