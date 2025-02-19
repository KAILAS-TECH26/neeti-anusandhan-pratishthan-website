import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, // Standalone component
  imports: [CommonModule], // Import CommonModule for structural directives
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Corrected property name
})
export class HeaderComponent {
  isSidebarOpen = false;
  isDropdownOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
