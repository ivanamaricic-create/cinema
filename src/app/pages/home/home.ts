import { Component } from '@angular/core';
import { Carousel } from '../../shared/carousel/carousel';
import { Movies } from "../movies/movies";


@Component({
  selector: 'app-home',
  imports: [Carousel, Movies],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
