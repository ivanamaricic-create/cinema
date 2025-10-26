import { Pipe, PipeTransform } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'actorNames',
  pure: true
})
export class ActorNamesPipe implements PipeTransform {
  constructor(private mockDataService: MockDataService) {}

  transform(actorIds: number[] | undefined): Observable<string> {
    if (!actorIds || actorIds.length === 0) return of('');
    return this.mockDataService.getActorNamesByIds(actorIds).pipe(
      map(names => names.join(', '))
    );
  }
}
