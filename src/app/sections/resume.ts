import { Component } from '@angular/core';
import { Reveal } from '../reveal';
import { education, experience, profile } from '../profile';

@Component({
  selector: 'app-resume',
  imports: [Reveal],
  template: `
    <section id="resume" class="section">
      <div class="container section-title" reveal>
        <h2>Currículum</h2>
        <p>Formación académica y experiencia profesional.</p>
      </div>
      <div class="container resume">
        <div reveal="100">
          <h3 class="resume-title">Resumen</h3>
          <div class="resume-item">
            <h4>{{ profile.fullName }}</h4>
            <p><em>{{ profile.bio }}</em></p>
            <ul>
              <li>{{ profile.city }}, Bolivia</li>
              <li>{{ profile.phone }}</li>
              <li>{{ profile.email }}</li>
            </ul>
          </div>
          <h3 class="resume-title">Educación</h3>
          @for (e of education; track e.title) {
            <div class="resume-item">
              <h4>{{ e.title }}</h4>
              <h5>{{ e.period }}</h5>
              <p><em>{{ e.place }}</em></p>
              @if (e.text) { <p>{{ e.text }}</p> }
            </div>
          }
        </div>
        <div reveal="200">
          <h3 class="resume-title">Experiencia profesional</h3>
          @for (x of experience; track x.title) {
            <div class="resume-item">
              <h4>{{ x.title }}</h4>
              <h5>{{ x.period }}</h5>
              <p><em>{{ x.place }}</em></p>
              <ul>
                @for (t of x.tasks; track t) { <li>{{ t }}</li> }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Resume {
  protected readonly profile = profile;
  protected readonly education = education;
  protected readonly experience = experience;
}
