import { Component } from '@angular/core';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { EducationComponent } from './pages/education/education.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { SkillsComponent } from './pages/skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroSectionComponent,
    NavigationComponent,
    SkillsComponent,
    ServicesComponent,
    ProjectsComponent,
    EducationComponent,
    HobbiesComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'site';
}
