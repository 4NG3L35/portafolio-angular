import { Component, DestroyRef, inject, signal } from '@angular/core';
import { profile, socials } from '../profile';

@Component({
  selector: 'app-hero',
  template: `
    <section id="hero" class="hero dark">
      <img src="img/hero.jpg" alt="" />
      <div class="container">
        <h2>{{ profile.name }}</h2>
        <p>Soy <span class="typed">{{ text() }}</span><span class="cursor">|</span></p>
        <div class="hero-links">
          @for (s of socials; track s.icon) {
            <a [href]="s.url" target="_blank" rel="noopener" [attr.aria-label]="s.label"><i class="bi {{ s.icon }}"></i></a>
          }
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly profile = profile;
  protected readonly socials = socials;
  protected readonly text = signal('');

  constructor() {
    let role = 0, chars = 0, deleting = false, wait = 0;
    const timer = setInterval(() => {
      if (wait > 0) {
        wait--;
        return;
      }
      const word = profile.roles[role];
      chars += deleting ? -1 : 1;
      this.text.set(word.slice(0, chars));
      if (!deleting && chars === word.length) {
        deleting = true;
        wait = 20;
      } else if (deleting && chars === 0) {
        deleting = false;
        role = (role + 1) % profile.roles.length;
        wait = 4;
      }
    }, 90);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }
}
