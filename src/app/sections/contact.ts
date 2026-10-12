import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reveal } from '../reveal';
import { profile } from '../profile';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Reveal],
  template: `
    <section id="contact" class="section">
      <div class="container section-title" reveal>
        <h2>Contacto</h2>
        <p>¿Quieres escribirme? Puedes contactarme por estos medios o usar el formulario.</p>
      </div>
      <div class="container contact">
        <div class="info-wrap" reveal="100">
          <div class="info-item"><i class="bi bi-geo-alt"></i><div><h3>Dirección</h3><p>{{ profile.city }}, Bolivia</p></div></div>
          <div class="info-item"><i class="bi bi-telephone"></i><div><h3>Llámame</h3><p><a [href]="profile.whatsapp" target="_blank" rel="noopener">{{ profile.phone }}</a></p></div></div>
          <div class="info-item"><i class="bi bi-envelope"></i><div><h3>Escríbeme</h3><p><a [href]="'mailto:' + profile.email">{{ profile.email }}</a></p></div></div>
          <iframe title="Mapa de Cochabamba" loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-66.23%2C-17.43%2C-66.10%2C-17.35&layer=mapnik"></iframe>
        </div>
        <form class="contact-form" reveal="200" (ngSubmit)="send()" #f="ngForm">
          <div class="row2">
            <label>Tu nombre <input name="name" [(ngModel)]="name" required /></label>
            <label>Tu correo <input type="email" name="email" [(ngModel)]="email" required email /></label>
          </div>
          <label>Asunto <input name="subject" [(ngModel)]="subject" required /></label>
          <label>Mensaje <textarea name="message" rows="7" [(ngModel)]="message" required></textarea></label>
          @if (sent()) {
            <div class="sent-message">Se abrió tu aplicación de correo con el mensaje listo para enviar. ¡Gracias!</div>
          }
          <div class="actions">
            <button type="submit" [disabled]="f.invalid">Enviar por correo</button>
            <button type="button" class="outline" [disabled]="!message" (click)="whatsapp()"><i class="bi bi-whatsapp"></i> WhatsApp</button>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class Contact {
  protected readonly profile = profile;
  protected readonly sent = signal(false);
  protected name = '';
  protected email = '';
  protected subject = '';
  protected message = '';

  send() {
    const body = `${this.message}\n\n${this.name} (${this.email})`;
    location.href = `mailto:${profile.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(body)}`;
    this.sent.set(true);
  }

  whatsapp() {
    const text = `Hola, soy ${this.name || 'un visitante'}. ${this.message}`;
    window.open(`${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }
}
