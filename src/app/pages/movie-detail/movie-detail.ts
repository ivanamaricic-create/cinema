import { Component, inject, computed} from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MockDataService} from '../../core/services/mock-data.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {
  private route = inject(ActivatedRoute);
  private mockDataService = inject(MockDataService);
  readonly repertoire = this.mockDataService.repertoire;

  movieId = toSignal(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id')))
    )
  );

  movie = computed(() =>
    this.mockDataService.getMovieById(this.movieId()!)
  );
  
  getMovie(id: number) {
  return this.mockDataService.getMovieById(id);
  }

   getActorNames(actorId: number[]): string {
    return (actorId || []).map(id => this.mockDataService.getActorById(id)?.name || 'Unknown').join(', ');
  }

  getProjections(movieId: number, repertoireId: number) {
    return this.mockDataService.getProjectionsByMovieAndRepertoire(movieId, repertoireId) || [];
  }
}
