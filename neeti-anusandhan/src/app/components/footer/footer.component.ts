import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,  // Mark the component as standalone
})
export class FooterComponent {
  email: string = "nenapinresearch@gmail.com";
}
