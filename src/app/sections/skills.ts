import { Component, signal } from '@angular/core';
import { Reveal } from '../reveal';
import { skills } from '../profile';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  template: `
    <section id="skills" class="section light">
      <div class="container section-title" reveal>
        <h2>Habilidades</h2>
        <p>Tecnologías y áreas en las que vengo formándome y trabajando.</p>
      </div>
      <div class="container skills" reveal="100" (shown)="go.set(true)">
        @for (s of skills; track s.name) {
          <div class="progress">
            <span class="skill"><span>{{ s.name }}</span><i class="val">{{ s.value }}%</i></span>
            <div class="progress-bar-wrap"><div class="progress-bar" [style.width.%]="go() ? s.value : 0"></div></div>
          </div>
        }
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly skills = skills;
  protected readonly go = signal(false);
}
