import { Pipe, PipeTransform } from "@angular/core";
import { MockDataService, Projection } from "../services/mock-data.service";
import { Observable, of } from "rxjs";

@Pipe({
  name: 'projections',
  standalone: true,
  pure: true
})
export class ProjectionsPipe implements PipeTransform {
  constructor(private mockDataService: MockDataService) {}

  transform(movieId: number, repertoireId: number): Observable<Projection[]> {
    if (!movieId || !repertoireId) return of([]);
    return this.mockDataService.getProjectionsByMovieAndRepertoire(movieId, repertoireId);
  }
}