import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactEmail = 'kaptuepatrice5@gmail.com'; // Remplace par ton vrai mail
  whatsappNumber = '237698375791'; // Mon numéro
  
  // Gestion de l'état du formulaire
  isSubmitting = signal(false);
  submitStatus = signal<'success' | 'error' | null>(null);

  async onSubmit(event: Event, form: any) {
    event.preventDefault();
    if (form.invalid) return;

    this.isSubmitting.set(true);
    
    // Utilisation de Formspree (Solution pro sans backend)
    const formData = new FormData(event.target as HTMLFormElement);
    
    try {
      const response = await fetch(`https://formspree.io/f/YOUR_ID_HERE`, { // Remplace YOUR_ID_HERE après création sur formspree.io
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.submitStatus.set('success');
        form.reset();
      } else {
        this.submitStatus.set('error');
      }
    } catch (error) {
      this.submitStatus.set('error');
    } finally {
      this.isSubmitting.set(false);
      setTimeout(() => this.submitStatus.set(null), 5000);
    }
  }

  openWhatsApp() {
    const text = encodeURIComponent("Bonjour Patrice, j'ai vu ton portfolio et j'aimerais discuter d'un projet.");
    window.open(`https://wa.me/${this.whatsappNumber}?text=${text}`, '_blank');
  }
}
