import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'; // ✅ This is the key part!

declare var bootstrap: any;

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [
    NgFor, // ✅ For *ngFor
  ]
})
export class GalleryComponent {
  galleryImages = [
    {
      src: 'assets/gallery/climate-change.jpg',
      thumb: 'assets/gallery/climate-change.jpg',
      caption: 'Climate Change'
    },
    {
      src: 'assets/gallery/indo-nepal.jpg',
      thumb: 'assets/gallery/indo-nepal.jpg',
      caption: 'Indo Nepal relation'
    },
    {
      src: 'assets/gallery/R-collaboration1.jpg',
      thumb: 'assets/gallery/R-collaboration1.jpg',
      caption: 'Collaboration'
    },
    {
      src: 'assets/gallery/R-Collaboration2.jpg',
      thumb: 'assets/gallery/R-Collaboration2.jpg',
      caption: 'Collaboration'
    },
    {
      src: 'assets/gallery/Poverty-Alleviation.jpg',
      thumb: 'assets/gallery/Poverty-Alleviation.jpg',
      caption: 'Poverty Alleviation'
    },
    {
      src: 'assets/gallery/Sanskrit-sammelan.jpg',
      thumb: 'assets/gallery/Sanskrit-sammelan.jpg',
      caption: 'Sanskrit Sammelan'
    },
    {
      src: 'assets/gallery/SSammelan.jpg',
      thumb: 'assets/gallery/SSammelan.jpg',
      caption: 'Sammelan'
    },
    {
      src: 'assets/gallery/YSSummit1.jpg',
      thumb: 'assets/gallery/YSSummit1.jpg',
      caption: 'Sammelan'
    },
    {
      src: 'assets/gallery/YSSummit2.jpg',
      thumb: 'assets/gallery/YSSummit2.jpg',
      caption: 'Sammelan'
    },
  ];

  selectedImage: any = null;

  openModal(image: any): void {
    this.selectedImage = image;

    // Open Bootstrap modal programmatically
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
