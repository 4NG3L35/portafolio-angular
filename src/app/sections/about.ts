import { Component } from '@angular/core';
import { Reveal } from '../reveal';
import { profile } from '../profile';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  template: `
    <section id="about" class="section">
      <div class="container section-title" reveal>
        <h2>Sobre mí</h2>
        <p>Un poco más sobre quién soy y en qué estoy trabajando actualmente.</p>
      </div>
      <div class="container about">
        <img src="img/about.jpg" [alt]="profile.fullName" reveal="100" />
        <div class="content" reveal="200">
          <h2>{{ profile.degree }}</h2>
          <p class="fst-italic">{{ profile.bio }}</p>
          <div class="facts">
            <ul>
              <li><i class="bi bi-chevron-right"></i><strong>Cumpleaños:</strong><span>{{ profile.birthday }}</span></li>
              <li><i class="bi bi-chevron-right"></i><strong>Teléfono:</strong><span>{{ profile.phone }}</span></li>
              <li><i class="bi bi-chevron-right"></i><strong>Ciudad:</strong><span>{{ profile.city }}, Bolivia</span></li>
              <li><i class="bi bi-chevron-right"></i><strong>GitHub:</strong><a [href]="profile.github" target="_blank" rel="noopener">4NG3L35</a></li>
            </ul>
            <ul>
              <li><i class="bi bi-chevron-right"></i><strong>Edad:</strong><span>{{ profile.age }}</span></li>
              <li><i class="bi bi-chevron-right"></i><strong>Carrera:</strong><span>Ingeniería de Sistemas</span></li>
              <li><i class="bi bi-chevron-right"></i><strong>Email:</strong><span>{{ profile.email }}</span></li>
              <li><i class="bi bi-chevron-right"></i><strong>Freelance:</strong><span>{{ profile.freelance ? 'Disponible' : 'No disponible' }}</span></li>
            </ul>
          </div>
          <p>Me gusta aprender haciendo: desde dar soporte técnico hasta desarrollar sistemas web, móviles y de escritorio. Fuera del código disfruto la fotografía, sobre todo los planos generales y los detalles.</p>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly profile = profile;
}
