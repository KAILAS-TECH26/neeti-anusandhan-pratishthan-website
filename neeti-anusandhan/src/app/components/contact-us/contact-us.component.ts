import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ContactUsComponent {
  contact = { name: '', email: '', message: '' };

  submitForm() {
    alert('Thank you, ' + this.contact.name + '! Your message has been sent.');
    this.contact = { name: '', email: '', message: '' };
  }
}
