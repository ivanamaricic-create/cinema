import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { MockDataService , Movie} from "../services/mock-data.service";
import { inject } from "@angular/core";

    export const movieDetailResolver: ResolveFn<Movie | undefined> = (
        route : ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ) => {
        const mockDataService = inject(MockDataService);
        const id = Number(route.paramMap.get('id')!)
        if(!id) throw new Error('Movie Id is required');
        return mockDataService.getMovieById(id);
    };
