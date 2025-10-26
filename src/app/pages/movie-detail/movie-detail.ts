import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MockDataService, Movie, Repertoire} from '../../core/services/mock-data.service';
import { ActorNamesPipe } from '../../core/pipes/actor-names.pipe';
import { ProjectionsPipe } from '../../core/pipes/projections.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, ActorNamesPipe, ProjectionsPipe],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.css']
})
export class MovieDetail {
  private mockDataService = inject(MockDataService);
  repertoire$:Observable<Repertoire[]> = this.mockDataService.getAllRepertoire();
  movie : Movie | undefined;

  constructor(private route: ActivatedRoute){
    this.movie = this.route.snapshot.data['movie'];
  } 
}
