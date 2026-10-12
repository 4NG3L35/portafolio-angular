import { Component, input, signal } from '@angular/core';
import { profile, socials } from '../profile';

@Component({
  selector: 'app-sidebar',
  template: `
    <button class="header-toggle" (click)="open.set(!open())" [attr.aria-label]="open() ? 'Cerrar menú' : 'Abrir menú'">
      <i class="bi" [class.bi-list]="!open()" [class.bi-x]="open()"></i>
    </button>
    <header class="header" [class.header-show]="open()">
      <img class="profile-img" src="img/profile.jpg" [alt]="profile.fullName" />
      <a href="#hero" class="logo" (click)="open.set(false)"><h1>{{ profile.name }}</h1></a>
      <div class="social-links">
        @for (s of socials; track s.icon) {
          <a [href]="s.url" target="_blank" rel="noopener" [attr.aria-label]="s.label"><i class="bi {{ s.icon }}"></i></a>
        }
      </div>
      <nav class="navmenu">
        @for (n of nav; track n.id) {
          <a [href]="'#' + n.id" [class.active]="active() === n.id" (click)="open.set(false)">
            <i class="bi {{ n.icon }} navicon"></i>{{ n.label }}
          </a>
        }
      </nav>
    </header>
  `,
})
export class Sidebar {
  readonly active = input('hero');
  protected readonly open = signal(false);
  protected readonly profile = profile;
  protected readonly socials = socials;
  protected readonly nav = [
    { id: 'hero', label: 'Inicio', icon: 'bi-house' },
    { id: 'about', label: 'Sobre mí', icon: 'bi-person' },
    { id: 'skills', label: 'Habilidades', icon: 'bi-bar-chart' },
    { id: 'resume', label: 'Currículum', icon: 'bi-file-earmark-text' },
    { id: 'portfolio', label: 'Portafolio', icon: 'bi-images' },
    { id: 'contact', label: 'Contacto', icon: 'bi-envelope' },
  ];
}
