import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var $: any; // Declare jQuery to avoid TypeScript errors

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // No window reference used here for SSR compatibility.
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeCarousel();
      this.initializeBackToTop();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.cleanUpEventListeners();
    }
  }

  private initializeCarousel() {
    $('.hero-slider').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: false,
      navText: ['PREV', 'NEXT'],
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 7000,
      responsive: {
        0: {
          nav: false,
        },
        768: {
          nav: true,
        }
      }
    });
  }

  private initializeBackToTop() {
    if (isPlatformBrowser(this.platformId)) {
      const backtotop = document.querySelector('.back-to-top');
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active');
          } else {
            backtotop.classList.remove('active');
          }
        };
   
        window.addEventListener('load', toggleBacktotop);
        document.addEventListener('scroll', toggleBacktotop);
        this.toggleBacktotopHandler = toggleBacktotop;
      }
    }
   }
   

  private cleanUpEventListeners() {
    if (this.toggleBacktotopHandler) {
      window.removeEventListener('load', this.toggleBacktotopHandler);
      document.removeEventListener('scroll', this.toggleBacktotopHandler);
    }
  }

  private toggleBacktotopHandler: (() => void) | null = null;
}