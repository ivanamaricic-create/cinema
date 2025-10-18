import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { MockDataService, Movie } from '../services/mock-data.service';

@Pipe({ name: 'movieById', pure: true, standalone: true })
export class MovieByIdPipe implements PipeTransform {
  constructor(private mockDataService: MockDataService) {}

  transform(id: number): Observable<Movie | undefined> {
    return this.mockDataService.getMovieById(id);
  }
}
