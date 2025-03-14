import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutNenapComponent } from './components/about-nenap/about-nenap.component';
import { ExecutiveCommitteeComponent } from './components/executive-committee/executive-committee.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DirectorComponent } from './director/director.component';
import { ExecutiveDirectorComponent } from './executive-director/executive-director.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ Homepage now uses HomeComponent
  { path: 'about-nenap', component: AboutNenapComponent},
  { path: 'executive-committee', component: ExecutiveCommitteeComponent},
  { path: 'contact', component: ContactUsComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'director', component: DirectorComponent },
  { path: 'executive-director', component: ExecutiveDirectorComponent },
];
