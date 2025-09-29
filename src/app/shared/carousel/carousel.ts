import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage  } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
  imports:[CommonModule, NgOptimizedImage ]
})
export class Carousel {
  images = [
    { src: 'assets/images/carousel1.jpg', alt: 'Carousel 1' },
    { src: 'assets/images/carousel2.jpg', alt: 'Carousel 2' },
    { src: 'assets/images/carousel3.jpg', alt: 'Carousel 3' }
  ];
  
}
