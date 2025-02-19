import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

// Import Components
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS for browser environment
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
