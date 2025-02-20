import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // ✅ Standalone component
  imports: [CommonModule, RouterModule], // ✅ Import RouterModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // ✅ Ensure correct property name
})
export class HeaderComponent {
  isSidebarOpen = false;
  isDropdownOpen = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = false;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
