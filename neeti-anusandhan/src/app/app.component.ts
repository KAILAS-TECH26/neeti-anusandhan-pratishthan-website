import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import AOS from 'aos';

// Import Components
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // ✅ Import CommonModule to use *ngIf
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    RouterModule  // ✅ Required for routing
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showSlider = true; // Default: Show slider

  constructor(@Inject(PLATFORM_ID) private platformId: object, private router: Router) {
    this.router.events.subscribe(() => {
      // Define pages where the slider should be visible
      const sliderPages = ['/'];
      this.showSlider = sliderPages.includes(this.router.url);
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        AOS.init({
          duration: 1000,  // Adjust animation speed
          once: true,      // Only run animation once
        });
      } catch (error) {
        console.error('AOS initialization failed', error);
      }
    }
  }

  title = 'neeti-anusandhan';
}
