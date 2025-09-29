import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage  } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, NgOptimizedImage ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  imagePath  = "assets/images/logo.png";

  menuItems = [
      { label: 'Home', path: './home' },
      { label: 'Movies', path: './movies' },
      { label: 'Projections', path: './projections' },
      { label: 'Repertoire', path: './repertoire' }
    ];

}
