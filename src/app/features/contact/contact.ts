import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactEmail = 'ton-email@exemple.com';
  whatsappNumber = '2376XXXXXXXXX'; // Remplace par ton numéro

  sendEmail(form: any) {
    const { name, subject, message } = form.value;
    const mailtoLink = `mailto:${this.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  }

  openWhatsApp() {
    const text = encodeURIComponent("Bonjour Patrice, j'ai vu ton portfolio et j'aimerais discuter d'un projet.");
    window.open(`https://wa.me/${this.whatsappNumber}?text=${text}`, '_blank');
  }
}
