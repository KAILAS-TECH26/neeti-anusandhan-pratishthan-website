import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,  // Mark the component as standalone
})
export class AboutComponent {
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  
}
