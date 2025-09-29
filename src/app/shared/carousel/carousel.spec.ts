import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carousel } from './carousel';
import { NgOptimizedImage } from '@angular/common';

describe('CarouselComponent', () => {
  let component: Carousel;
  let fixture: ComponentFixture<Carousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousel, NgOptimizedImage] 
    }).compileComponents();

    fixture = TestBed.createComponent(Carousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
